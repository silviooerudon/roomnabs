#!/usr/bin/env bash
#
# Bulk-download product photos into public/img/products/.
#
# WHY THIS IS A SCRIPT YOU RUN (not something the site does automatically):
# product photos are copyrighted. Only put a URL here if you're cleared to use
# the image — your own photo, the manufacturer's official product image, or an
# Amazon image obtained via the Product Advertising API once you're an approved
# Associate. Hotlinking/scraping retailer images you don't have rights to is
# against their terms.
#
# USAGE
#   1. Fill in the IMAGES map below: each key is a product `id` from
#      lib/products.ts, each value is a direct image URL.
#   2. From the repo root, run:  bash scripts/fetch-product-images.sh
#   3. Set `image: "/img/products/<id>.<ext>"` on each product in lib/products.ts.
#
# The script names each file <id>.<ext> (extension taken from the URL, default
# .jpg) and skips any entry whose URL is still the empty placeholder.

set -euo pipefail

DEST="public/img/products"
mkdir -p "$DEST"

# product-id  ->  image URL   (leave the URL empty to skip)
declare -A IMAGES=(
  # --- Air fryers (small-kitchen) ---
  [ninja-af100uk]=""
  [philips-na230]=""
  [tefal-ey245840]=""
  [morphy-480005]=""
  [ninja-af180uk]=""
  [ninja-crispi-fn101]=""
  # --- Robot vacuums (cleaning) ---
  [eufy-robovac-11s-max]=""
  [lefant-m210-pro]=""
  [eufy-c10]=""
  [roborock-q5]=""
  [tapo-rv30-max-plus]=""
  [irobot-roomba-694]=""
)

for id in "${!IMAGES[@]}"; do
  url="${IMAGES[$id]}"
  if [[ -z "$url" ]]; then
    echo "skip  $id (no URL set)"
    continue
  fi
  # Derive an extension from the URL, defaulting to jpg.
  ext="${url##*.}"
  ext="${ext%%\?*}"
  case "$ext" in jpg|jpeg|png|webp|avif) ;; *) ext="jpg" ;; esac
  out="$DEST/$id.$ext"
  echo "get   $id -> $out"
  curl -sSL -A "Mozilla/5.0" -o "$out" "$url" \
    -w "      HTTP %{http_code} | %{size_download} bytes | %{content_type}\n"
done

echo "Done. Now set the matching image: \"/img/products/<id>.<ext>\" fields in lib/products.ts."
