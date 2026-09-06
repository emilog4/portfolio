#!/usr/bin/env bash
# Builds the portfolio (static export) and, if present alongside this repo,
# the Budapest Spots app (built with base=/budapest/), combines them into
# one deployable directory, and publishes it to the gh-pages branch.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Building portfolio"
rm -rf out .next deploy
npm run build

mkdir -p deploy
cp -R out/. deploy/

BUDAPEST_DIR="../budapest-vibes-finder"
if [ -d "$BUDAPEST_DIR" ]; then
  echo "==> Building Budapest Spots (base=/budapest/)"
  (cd "$BUDAPEST_DIR" && rm -rf dist && npx vite build --base=/budapest/ && cp dist/index.html dist/404.html)
  mkdir -p deploy/budapest
  cp -R "$BUDAPEST_DIR/dist/." deploy/budapest/
  rm -f deploy/budapest/CNAME deploy/budapest/.DS_Store
else
  echo "==> $BUDAPEST_DIR not found, skipping Budapest Spots subsite"
fi

echo "==> Publishing to gh-pages"
npx gh-pages -d deploy --nojekyll --cname emilo.se -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "==> Done"
