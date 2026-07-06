#!/usr/bin/env bash
# Sync the built token CSS into the site's vendor dir.
# The site NEVER reads dist/ directly — it reads vendor/tokens.css only.
# Override the site location with ORIN_SITE_DIR if the layout ever differs.
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$HERE/dist/light/variables.css"
DEST_DIR="${ORIN_SITE_DIR:-$HERE/../site}/vendor"

if [[ ! -f "$SRC" ]]; then
  echo "sync: $SRC not found — run 'npm run build' first" >&2
  exit 1
fi

mkdir -p "$DEST_DIR"
cp "$SRC" "$DEST_DIR/tokens.css"
echo "synced -> $DEST_DIR/tokens.css"
