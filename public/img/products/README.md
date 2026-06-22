# Product photos

Real product photos go here. Each file maps to a product by the `image` field
in `lib/products.ts` — e.g. a product with

```ts
image: "/img/products/ninja-af100uk.jpg",
```

is served from `public/img/products/ninja-af100uk.jpg`.

When a product has **no** `image`, the UI falls back to the on-brand SVG
illustration automatically (picked from its `imageAlt`), so nothing ever breaks
if a photo is missing.

## How to add photos

1. Get a photo you're allowed to use. **Don't** scrape and host retailer photos
   you don't have rights to. Good sources, in order of preference:
   - Your own photos.
   - The **manufacturer's** official press/product image (Ninja, Philips,
     Tefal, Morphy Richards, Eufy, Roborock, etc.).
   - The **Amazon Product Advertising API** image — only once you're an approved
     Amazon Associate (the licence that makes Amazon images OK to use). We are
     not approved yet, so this isn't available right now.
2. Save it here with the product's `id` as the filename, e.g.
   `ninja-af100uk.jpg` (the product `id` is in `lib/products.ts`).
3. Set `image: "/img/products/<id>.jpg"` on that product in `lib/products.ts`.
4. Square-ish images on a white/transparent background look best (the card
   shows them `contain` on a soft gradient).

## Bulk download helper

If you have a list of URLs you're cleared to use, fill in
`scripts/fetch-product-images.sh` (URL per product id) and run it — it downloads
each into this folder. You still set the `image` fields in `lib/products.ts`
afterwards. See that script's header for usage.
