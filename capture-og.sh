#!/usr/bin/env bash
set -euo pipefail

if [[ "${1:-}" == "--prod" || "${1:-}" == "--production" ]]; then
  URL=$(node -e "
    const fs = require('fs');
    const m = fs.readFileSync('src/config/artist.ts', 'utf8')
      .match(/siteUrl:\s*[\"']([^\"']+)[\"']/);
    if (m) console.log(m[1]);
    else process.exit(1);
  ")
  echo "Capturing from production: $URL"
  node scripts/capture-og.mjs "$URL"
else
  node scripts/capture-og.mjs
fi
