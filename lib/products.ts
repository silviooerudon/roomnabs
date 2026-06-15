/**
 * Structured product data for the homepage Featured Picks and comparison table.
 *
 * ⚠️ SOURCE OF TRUTH IS THE GUIDE ⚠️
 * These figures are transcribed from the air-fryer guide's "Quick picks" table
 * in `content/guides/best-air-fryers-small-kitchens-ireland.mdx` (specs from
 * manufacturer pages / Irish retailers, June 2026). Nothing here is invented —
 * where the guide has no confirmed price we use `null` and the UI shows the
 * "Check price" CTA instead of a number. Re-check before publish.
 *
 * Each `linkId` matches an entry in `lib/site.ts` LINKS, so the "Check price"
 * CTAs route through the `/go/[linkId]` redirect (rel="sponsored nofollow").
 *
 * Honesty: `badge` is an editorial "best for" label (why we picked it), NOT a
 * rating. We don't test products and show no stars/scores.
 */

export type Product = {
  id: string;
  name: string;
  /** Editorial "best for" label shown in place of a rating. */
  badge: string;
  capacity: string;
  /** Worktop footprint, width × depth. */
  footprint: string;
  height: string;
  /** Approx. cost of a 20-minute cook on current Irish electricity prices. */
  runCost: string;
  /** Approx. price as a string, or null when the guide hasn't confirmed one. */
  price: string | null;
  /** Affiliate link id (see lib/site.ts) used by the /go redirect. */
  linkId: string;
  /** Retailer name for the "Check price at …" CTA. */
  retailer: string;
  imageAlt: string;
};

/** Slug of the guide these picks come from. */
export const AIR_FRYER_GUIDE_SLUG = "best-air-fryers-small-kitchens-ireland";

export const AIR_FRYERS: Product[] = [
  {
    id: "ninja-af100uk",
    name: "Ninja Air Fryer 3.8L (AF100UK)",
    badge: "Best overall",
    capacity: "3.8 L",
    footprint: "28 × 34 cm",
    height: "35 cm",
    runCost: "~€0.19",
    price: "~€94.95",
    linkId: "af100uk-hn",
    retailer: "Harvey Norman",
    imageAlt: "Placeholder image of the Ninja 3.8L Air Fryer (AF100UK)",
  },
  {
    id: "philips-na230",
    name: "Philips 2000 Series (NA230/09)",
    badge: "Best value",
    capacity: "6.2 L",
    footprint: "30.9 × 40.4 cm",
    height: "30.8 cm",
    runCost: "~€0.21",
    price: "~€92.68",
    linkId: "philips-na230-amazon",
    retailer: "Currys",
    imageAlt:
      "Placeholder image of the Philips 2000 Series air fryer (NA230/09)",
  },
  {
    id: "tefal-ey245840",
    name: "Tefal Easy Fry Max 5L (EY245840)",
    badge: "Smallest footprint",
    capacity: "5 L",
    footprint: "27.3 × 32.4 cm",
    height: "37.5 cm",
    runCost: "~€0.18",
    price: null,
    linkId: "tefal-eyf-amazon",
    retailer: "Amazon",
    imageAlt: "Placeholder image of the Tefal Easy Fry Max 5L air fryer",
  },
  {
    id: "morphy-480005",
    name: "Morphy Richards Digital 3L (480005)",
    badge: "Cheapest to run",
    capacity: "3 L",
    footprint: "33.7 × 27.9 cm",
    height: "31.3 cm",
    runCost: "~€0.17",
    price: null,
    linkId: "morphy-480005-currys",
    retailer: "Currys",
    imageAlt: "Placeholder image of the Morphy Richards Digital 3L air fryer",
  },
  {
    id: "ninja-af180uk",
    name: "Ninja MAX PRO 6.2L (AF180UK)",
    badge: "Best for batches",
    capacity: "6.2 L",
    footprint: "28 × 36 cm",
    height: "30.5 cm",
    runCost: "~€0.30",
    price: "~€149.99",
    linkId: "af180uk-currys",
    retailer: "Currys",
    imageAlt: "Placeholder image of the Ninja MAX PRO 6.2L air fryer (AF180UK)",
  },
  {
    id: "ninja-crispi-fn101",
    name: "Ninja CRISPi Glass (FN101UKGY)",
    badge: "Premium pick",
    capacity: "1.4 + 3.8 L",
    footprint: "30.4 × 34 cm",
    height: "34.5 cm",
    runCost: "~€0.21",
    price: "~€179",
    linkId: "crispi-fn101-euronics",
    retailer: "Euronics",
    imageAlt: "Placeholder image of the Ninja CRISPi portable glass air fryer",
  },
];

/** Featured picks shown on the homepage (all current air-fryer picks). */
export function getFeaturedProducts(): Product[] {
  return AIR_FRYERS;
}
