#!/usr/bin/env bash
# THE ONLY SUDO STEP. Run once by the server administrator:   sudo bash /home/tractive/infina-web/deploy/sudo-setup.sh
# It adds the /infina-new route to nginx for chatbot.infina.co.in and reloads nginx. It changes nothing else
# (no backend files, no existing routes). It takes a backup, validates with `nginx -t` and rolls back on any error.
set -euo pipefail

SNIPPET_SRC="$(cd "$(dirname "$0")" && pwd)/nginx-infina-new.conf"
SNIPPET_DST=/etc/nginx/snippets/infina-new.conf
INCLUDE_LINE='include /etc/nginx/snippets/infina-new.conf;'

mkdir -p /etc/nginx/snippets
install -m 644 "$SNIPPET_SRC" "$SNIPPET_DST"

# Find the config file(s) that serve chatbot.infina.co.in over HTTPS (listen 443).
mapfile -t FILES < <(grep -Rl "server_name[^;]*chatbot.infina.co.in" /etc/nginx/sites-enabled /etc/nginx/conf.d 2>/dev/null || true)
if [ "${#FILES[@]}" -ne 1 ]; then
  echo "Could not pick a single nginx file for chatbot.infina.co.in (found ${#FILES[@]}: ${FILES[*]:-none})." >&2
  echo "Add this line by hand inside the HTTPS server block, above 'location / {', then run: nginx -t && systemctl reload nginx" >&2
  echo "    $INCLUDE_LINE" >&2
  exit 2
fi
CONF="${FILES[0]}"

if grep -qF "$INCLUDE_LINE" "$CONF"; then
  echo "Already included in $CONF"
else
  cp -a "$CONF" "$CONF.bak.$(date +%Y%m%d%H%M%S)"
  # Insert the include before the first 'location / {' that follows the first 'listen 443' line.
  awk -v inc="    $INCLUDE_LINE" '
    /listen[^;]*443/ { tls=1 }
    tls && !done && /^[[:space:]]*location[[:space:]]+\/[[:space:]]*\{/ { print inc; done=1 }
    { print }
  ' "$CONF" > "$CONF.new"
  if ! grep -qF "$INCLUDE_LINE" "$CONF.new"; then
    rm -f "$CONF.new"
    echo "No 'location / {' found after 'listen 443' in $CONF. Add this line by hand in the HTTPS server block:" >&2
    echo "    $INCLUDE_LINE" >&2
    exit 3
  fi
  mv "$CONF.new" "$CONF"
fi

if nginx -t; then
  systemctl reload nginx
  echo "OK: nginx reloaded. Test: curl -I https://chatbot.infina.co.in/infina-new"
else
  echo "nginx -t failed: restoring the previous config." >&2
  BAK="$(ls -t "$CONF".bak.* | head -1)"
  cp -a "$BAK" "$CONF"
  nginx -t && systemctl reload nginx
  exit 4
fi
