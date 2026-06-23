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
  # Official manufacturer product images (verified HTTP 200, June 2026).
  [ninja-af100uk]="https://www.ninjakitchen.ie/cdn/shop/files/AF100UK_1.png?v=1721288381&width=2048"
  # philips-na230: Philips does NOT host a real photo on its own CDN — its
  # official page pulls the image from Icecat (third party). This is that same
  # official manufacturer image, served by Icecat.
  [philips-na230]="https://images.icecat.biz/img/gallery/c5e535148f84198ff32a80cd848f35ce94f879a8.jpg"
  [tefal-ey245840]="https://www.tefal.co.uk/medias/7211419106.jpg?context=bWFzdGVyfHJvb3R8NjE4MzN8aW1hZ2UvanBlZ3xhRFF5TDJoak9DOHhOamswTlRZNE1UZzVNVE0xT0M1cWNHY3xiNzFlNmJkODNkNTJjODkzNjFkNTk2NGYxOGM3NTU3ZWEzNzdkMjQxYjM0NmQ0NzBmMTcyY2Q3MGJlYjZjNGE5"
  [morphy-480005]="https://www.morphyrichards.co.uk/cdn/shop/files/63_c774378b-9a10-479b-bc03-6981df1f53ef.png?v=1695712000"
  [ninja-af180uk]="https://assets.sharkninja.com/image/upload/SharkNinja-EU/AF180UKBRN_01.jpg"
  [ninja-crispi-fn101]="https://assets.sharkninja.com/image/upload/SharkNinja-EU/FN101UKGY_01.jpg"
  # --- Robot vacuums (cleaning) ---
  # Official manufacturer product images (verified HTTP 200, June 2026).
  [eufy-robovac-11s-max]="https://cdn.shopify.com/s/files/1/0504/7094/4954/files/11s_max.png?v=1723126852&width=1920"
  [lefant-m210-pro]="https://www.lefant.com/cdn/shop/files/210P_2.1.jpg?v=1737709094"
  [eufy-c10]="https://cdn.shopify.com/s/files/1/0504/7094/4954/files/C10.png?v=1758623383"
  # roborock-q5: the base Q5 product page is gone, but the official base-Q5 image
  # (no dock) still lives on Roborock's own CDN, linked from the Q5 Series page.
  [roborock-q5]="https://us.roborock.com/cdn/shop/t/86/assets/robo_q5_q5.png?v=64955159893738628791694687836"
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
