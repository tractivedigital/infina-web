#!/usr/bin/env bash
# Builds and (re)starts the site on the server. Needs NO sudo. Run from anywhere:  bash ~/infina-web/deploy/deploy.sh
#
# Prerequisites (one time, see deploy/README.md): Node 20+, pm2 in the user's npm prefix, and ~/infina-web/.env.production.
# The build must happen on Linux (the standalone bundle contains Linux native image libraries), so this script builds
# on the server with a memory cap and low priority so the backend keeps running normally.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f .env.production ]; then
  echo "Missing .env.production (copy deploy/env.production.example and fill it in)." >&2
  exit 1
fi
set -a
# shellcheck disable=SC1091
. ./.env.production
set +a

echo "== free memory before build =="; free -m | sed -n '1,2p'

if [ -d .git ] && [ "${SKIP_GIT:-0}" != "1" ]; then
  echo "== git pull =="; git pull --ff-only
fi

echo "== install =="; npm ci --no-audit --no-fund

echo "== build (${NEXT_PUBLIC_BASE_PATH:-no base path}) =="
NODE_OPTIONS="--max-old-space-size=1536" nice -n 10 npm run build

echo "== assemble standalone bundle =="
rm -rf .next/standalone/.next/static .next/standalone/public
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

echo "== (re)start with pm2 =="
npx --no-install pm2 startOrReload deploy/ecosystem.config.cjs --update-env 2>/dev/null \
  || pm2 startOrReload deploy/ecosystem.config.cjs --update-env
pm2 save

echo "== health check =="
sleep 4
code=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:${PORT:-3001}${NEXT_PUBLIC_BASE_PATH:-}")
echo "GET ${NEXT_PUBLIC_BASE_PATH:-/} -> $code (200 or 308 is healthy)"
