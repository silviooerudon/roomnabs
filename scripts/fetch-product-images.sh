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
#
# OPTIMISE AFTER DOWNLOAD: the originals can be multi-MB. We convert each to a
# resized WebP (max 1000px, quality 82) with `sharp` (a Next.js dependency) and
# point the `image` fields at the .webp, e.g.:
#   node -e 'const s=require("sharp");s("public/img/products/<id>.png")
#     .resize({width:1000,height:1000,fit:"inside",withoutEnlargement:true})
#     .webp({quality:82}).toFile("public/img/products/<id>.webp")'
# This took the robot-vacuum set from ~3.8 MB to ~140 KB total.

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
  # Official manufacturer product images (verified HTTP 200, June 2026).
  [eufy-robovac-11s-max]="https://cdn.shopify.com/s/files/1/0504/7094/4954/files/11s_max.png?v=1723126852&width=1920"
  [lefant-m210-pro]="https://www.lefant.com/cdn/shop/files/210P_2.1.jpg?v=1737709094"
  [eufy-c10]="https://cdn.shopify.com/s/files/1/0504/7094/4954/files/C10.png?v=1758623383"
  # roborock-q5: base Q5 page is gone from roborock.com (only the different Q5
  # Max+ remains). Left blank on purpose — keeps the SVG illustration fallback.
  [roborock-q5]=""
  [tapo-rv30-max-plus]="https://static.tp-link.com/upload/image-line/01_normal_20241019001632q.jpg"
  [irobot-roomba-694]="https://www.irobot.com/on/demandware.static/-/Sites-master-catalog-irobot/default/dwca56f678/images/large/roomba/R694020_1.jpg"
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
