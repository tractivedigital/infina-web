#!/usr/bin/env bash
# Starts the Next.js standalone server. Used by pm2 (deploy/ecosystem.config.cjs); can also be run by hand.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -f .env.production ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env.production
  set +a
fi

export NODE_ENV=production
export PORT="${PORT:-3001}"
export HOSTNAME="${HOSTNAME_BIND:-127.0.0.1}"

cd .next/standalone
exec node server.js
