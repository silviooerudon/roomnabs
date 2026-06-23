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

/**
 * Editorial detail used by the `/product/[slug]` page. This is honest copy
 * *derived from the real specs* (footprint, capacity, run cost, confirmed
 * price) — never a test result, score or star rating. Only products that have
 * a `details` block get a product page; everyone else routes to the guide so we
 * never ship a thin, content-light page just to fill a URL.
 */
export type ProductDetails = {
  /** One line on why it earns its `badge` — positioning, not a verdict. */
  tagline: string;
  /** A couple of honest paragraphs built from the spec sheet, no test claims. */
  overview: string[];
  /** Concrete strengths, each one traceable to a real spec. */
  pros: string[];
  /** Honest trade-offs, each one traceable to a real spec. */
  cons: string[];
  /** Who the footprint/capacity actually suits. */
  bestFor: string;
};

export type Product = {
  id: string;
  name: string;
  /** Editorial "best for" label shown in place of a rating. */
  badge: string;
  /** Category slug (see lib/site.ts CATEGORIES) this product belongs to. */
  category: string;
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
  /**
   * Real product photo, served from `/public` (e.g. "/img/products/ninja-af100uk.jpg").
   * Optional: when absent the UI falls back to the on-brand illustration picked
   * from `imageAlt`. Use a licensed image (manufacturer/your own/affiliate API) —
   * see `public/img/products/README.md`.
   */
  image?: string;
  imageAlt: string;
  /** Present only when we have enough real content for a product page. */
  details?: ProductDetails;
};

/** Slug of the guide these picks come from. */
export const AIR_FRYER_GUIDE_SLUG = "best-air-fryers-small-kitchens-ireland";

/**
 * When the prices in this file were last verified. Shown next to every price so
 * a number always carries a date — we never display a bare "price" as if it
 * were live. Re-check and bump this on each publish.
 */
export const PRICE_CHECKED = "June 2026";

export const AIR_FRYERS: Product[] = [
  {
    id: "ninja-af100uk",
    name: "Ninja Air Fryer 3.8L (AF100UK)",
    badge: "Best overall",
    category: "small-kitchen",
    capacity: "3.8 L",
    footprint: "28 × 34 cm",
    height: "35 cm",
    runCost: "~€0.19",
    price: "~€94.95",
    linkId: "af100uk-amazon",
    retailer: "Amazon.ie",
    image: "/img/products/ninja-af100uk.webp",
    imageAlt: "Ninja 3.8L Air Fryer (AF100UK)",
    details: {
      tagline:
        "The pick we point most small-kitchen renters at: a genuinely compact footprint, a confirmed price, and one of the lowest running costs here.",
      overview: [
        "At 28 × 34 cm the AF100UK takes up less worktop than most of the air fryers we compared, which is the spec that matters first when you only have a strip of counter to work with. Its 3.8 L drawer is sized for one person or a couple rather than a family batch-cook.",
        "Running cost works out at roughly €0.19 for a 20-minute cook on current Irish electricity prices — among the cheapest in this guide — and we have a confirmed price of about €94.95 at Harvey Norman as of June 2026.",
      ],
      pros: [
        "Compact 28 × 34 cm footprint fits most small worktops",
        "Low running cost (~€0.19 per 20-minute cook)",
        "Confirmed price (~€94.95) rather than an estimate",
      ],
      cons: [
        "3.8 L drawer suits one person or a couple, not big batches",
        "35 cm tall — measure your under-cabinet clearance first",
      ],
      bestFor:
        "Solo renters and couples who want the smallest sensible footprint without overpaying.",
    },
  },
  {
    id: "philips-na230",
    name: "Philips 2000 Series (NA230/09)",
    badge: "Best value",
    category: "small-kitchen",
    capacity: "6.2 L",
    footprint: "30.9 × 40.4 cm",
    height: "30.8 cm",
    runCost: "~€0.21",
    price: "~€92.68",
    linkId: "philips-na230-amazon",
    retailer: "Amazon.ie",
    image: "/img/products/philips-na230.webp",
    imageAlt: "Philips 2000 Series air fryer (NA230/09)",
    details: {
      tagline:
        "The most capacity per euro here: a 6.2 L drawer at the lowest confirmed price in the guide, if you can spare the worktop depth.",
      overview: [
        "The NA230/09 pairs a large 6.2 L drawer with the lowest confirmed price we found (about €92.68 at Currys as of June 2026), which is why it earns the value badge — you get family-sized capacity without paying a family-sized premium.",
        "The trade-off is depth: at 30.9 × 40.4 cm it needs a deeper run of worktop than the Ninja AF100UK. Its 30.8 cm height is low, though, so it slips under standard wall cabinets more easily than the taller models.",
      ],
      pros: [
        "Large 6.2 L drawer handles full batches",
        "Lowest confirmed price in the guide (~€92.68)",
        "Low 30.8 cm height clears most wall cabinets",
      ],
      cons: [
        "40.4 cm deep — needs a deeper worktop than the compact picks",
        "Bigger overall footprint than the Ninja AF100UK",
      ],
      bestFor:
        "Sharers and small households who want batch capacity and the lowest price, with worktop depth to spare.",
    },
  },
  {
    id: "tefal-ey245840",
    name: "Tefal Easy Fry Max 5L (EY245840)",
    badge: "Smallest footprint",
    category: "small-kitchen",
    capacity: "5 L",
    footprint: "27.3 × 32.4 cm",
    height: "37.5 cm",
    runCost: "~€0.18",
    price: null,
    linkId: "tefal-eyf-amazon",
    retailer: "Amazon.ie",
    image: "/img/products/tefal-ey245840.webp",
    imageAlt: "Tefal Easy Fry Max 5L air fryer",
  },
  {
    id: "morphy-480005",
    name: "Morphy Richards Digital 3L (480005)",
    badge: "Cheapest to run",
    category: "small-kitchen",
    capacity: "3 L",
    footprint: "33.7 × 27.9 cm",
    height: "31.3 cm",
    runCost: "~€0.17",
    price: null,
    linkId: "morphy-480005-amazon",
    retailer: "Amazon.ie",
    image: "/img/products/morphy-480005.webp",
    imageAlt: "Morphy Richards Digital 3L air fryer (Rose Gold)",
  },
  {
    id: "ninja-af180uk",
    name: "Ninja MAX PRO 6.2L (AF180UK)",
    badge: "Best for batches",
    category: "small-kitchen",
    capacity: "6.2 L",
    footprint: "28 × 36 cm",
    height: "30.5 cm",
    runCost: "~€0.30",
    price: "~€149.99",
    linkId: "af180uk-amazon",
    retailer: "Amazon.ie",
    image: "/img/products/ninja-af180uk.webp",
    imageAlt: "Ninja MAX PRO 6.2L air fryer (AF180UK)",
  },
  {
    id: "ninja-crispi-fn101",
    name: "Ninja CRISPi Glass (FN101UKGY)",
    badge: "Premium pick",
    category: "small-kitchen",
    capacity: "1.4 + 3.8 L",
    footprint: "30.4 × 34 cm",
    height: "34.5 cm",
    runCost: "~€0.21",
    price: "~€179",
    linkId: "crispi-fn101-euronics",
    retailer: "Euronics",
    image: "/img/products/ninja-crispi-fn101.webp",
    imageAlt: "Ninja CRISPi portable glass air fryer",
  },
];

/** Featured picks shown on the homepage (all current air-fryer picks). */
export function getFeaturedProducts(): Product[] {
  return AIR_FRYERS;
}

/** Every product we currently have, across all categories. */
export function getAllProducts(): Product[] {
  return AIR_FRYERS;
}

/** Products belonging to a category slug (e.g. "small-kitchen"). */
export function getProductsByCategory(category: string): Product[] {
  return AIR_FRYERS.filter((product) => product.category === category);
}

/** A single product by its id, or `undefined`. */
export function getProductById(id: string): Product | undefined {
  return AIR_FRYERS.find((product) => product.id === id);
}

/**
 * Products that have enough real content for a `/product/[slug]` page. These are
 * the only product pages we generate and index — everything else routes to the
 * guide rather than shipping a thin page.
 */
export function getProductsWithDetails(): Product[] {
  return AIR_FRYERS.filter((product) => product.details);
}

/**
 * Where a product card / link should point. Products with a real detail page go
 * there; the rest fall back to the source guide so there are no dead-end links.
 */
export function getProductHref(product: Product, guideSlug: string): string {
  return product.details ? `/product/${product.id}` : `/guide/${guideSlug}`;
}

/* ------------------------------------------------------------------------- *
 * Robot vacuums (compact / rented-apartment guide)
 *
 * Robot-vacuum specs (suction, navigation, height, noise, dock, runtime) don't
 * fit the air-fryer `Product` shape (capacity / footprint / run cost), so
 * rather than bend those fields we model the spec sheet as a generic ordered
 * `label`/`value` list. Same honesty rules as above: no scores/stars, `price`
 * is `null` until confirmed (UI shows "Check price"), each `linkId` resolves in
 * lib/site.ts and routes through `/go/[linkId]` (rel="sponsored nofollow"), and
 * the `badge` is an editorial "best for" label, not a rating.
 *
 * ⚠️ SOURCE OF TRUTH IS THE GUIDE ⚠️
 * Figures are transcribed from the guide's comparison table in
 * `content/guides/best-compact-robot-vacuums-small-rented-apartments.mdx`.
 * Where a spec couldn't be confirmed the guide uses "—" and so do we — never an
 * invented number. Re-check before publish.
 * ------------------------------------------------------------------------- */

/** One row of a generic spec sheet: a label and its display value. */
export type Spec = {
  label: string;
  /** Display value; "—" when the guide hasn't confirmed the figure. */
  value: string;
};

/**
 * A robot vacuum pick. Mirrors the honest, rating-free shape of `Product` but
 * carries its specs as a generic list instead of the air-fryer fields. No
 * `details` block by design — these route back to the guide rather than ship a
 * thin product page.
 */
export type RobotVacuum = {
  id: string;
  name: string;
  /** Editorial "best for" label shown in place of a rating. */
  badge: string;
  /** Category slug (see lib/site.ts CATEGORIES) — "cleaning". */
  category: string;
  /** The spec sheet, in display order. "—" where a figure isn't confirmed. */
  specs: Spec[];
  /** Approx. price as a string, or null when no price is confirmed (all null for now). */
  price: string | null;
  /** Affiliate link id (see lib/site.ts) used by the /go redirect. */
  linkId: string;
  /** Retailer name for the "Check price at …" CTA. */
  retailer: string;
  /** Real product photo (see `Product.image`); falls back to an illustration. */
  image?: string;
  imageAlt: string;
};

/** Slug of the guide these picks come from. */
export const ROBOT_VACUUM_GUIDE_SLUG =
  "best-compact-robot-vacuums-small-rented-apartments";

export const ROBOT_VACUUMS: RobotVacuum[] = [
  {
    id: "eufy-robovac-11s-max",
    name: "Eufy RoboVac 11S MAX",
    badge: "Best for low furniture",
    category: "cleaning",
    specs: [
      { label: "Type", value: "Vacuum only" },
      { label: "Suction", value: "—" },
      { label: "Navigation", value: "Gyro / random (no mapping)" },
      { label: "Height", value: '7.2 cm (2.85")' },
      { label: "Noise", value: "~51–55 dB" },
      { label: "Self-empty dock", value: "No" },
      { label: "Runtime", value: "~100 min" },
      { label: "Control", value: "Remote only (no app)" },
    ],
    price: null,
    linkId: "eufy-11s-max",
    retailer: "Amazon.ie",
    image: "/img/products/eufy-robovac-11s-max.webp",
    imageAlt: "Eufy RoboVac 11S MAX robot vacuum",
  },
  {
    id: "lefant-m210-pro",
    name: "Lefant M210 Pro",
    badge: "Cheapest with app",
    category: "cleaning",
    specs: [
      { label: "Type", value: "Vacuum only" },
      { label: "Suction", value: "4,000 Pa" },
      { label: "Navigation", value: "Gyro (minimal mapping)" },
      { label: "Height", value: "7.6 cm" },
      { label: "Noise", value: "~52 dB" },
      { label: "Self-empty dock", value: "No" },
      { label: "Runtime", value: "—" },
      { label: "Control", value: "Wi-Fi app + Alexa" },
    ],
    price: null,
    linkId: "lefant-m210-pro",
    retailer: "Amazon.ie",
    image: "/img/products/lefant-m210-pro.webp",
    imageAlt: "Lefant M210 Pro robot vacuum",
  },
  {
    id: "eufy-c10",
    name: "Eufy C10",
    badge: "Quietest + small dock",
    category: "cleaning",
    specs: [
      { label: "Type", value: "Vacuum" },
      { label: "Suction", value: "—" },
      { label: "Navigation", value: "—" },
      { label: "Height", value: "—" },
      { label: "Noise", value: "~51 dB (quietest here)" },
      { label: "Self-empty dock", value: "Yes — smallest dock here" },
      { label: "Runtime", value: "—" },
      { label: "Control", value: "Wi-Fi app + voice" },
    ],
    price: null,
    linkId: "eufy-c10",
    retailer: "Amazon.ie",
    image: "/img/products/eufy-c10.webp",
    imageAlt: "Eufy C10 robot vacuum",
  },
  {
    id: "roborock-q5",
    name: "Roborock Q5",
    badge: "Best mapping (budget)",
    category: "cleaning",
    specs: [
      { label: "Type", value: "Vacuum only (Q5+ adds an auto-empty dock)" },
      { label: "Suction", value: "—" },
      { label: "Navigation", value: "LiDAR mapping + room segmentation" },
      { label: "Height", value: '~9.6 cm (3.8")' },
      { label: "Noise", value: "—" },
      { label: "Self-empty dock", value: "No (available on the Q5+)" },
      { label: "Runtime", value: "180 min" },
      { label: "Control", value: "Wi-Fi app + voice" },
    ],
    price: null,
    linkId: "roborock-q5",
    retailer: "Amazon.ie",
    image: "/img/products/roborock-q5.webp",
    imageAlt: "Roborock Q5 robot vacuum",
  },
  {
    id: "tapo-rv30-max-plus",
    name: "TP-Link Tapo RV30 Max Plus",
    badge: "Most features for the money",
    category: "cleaning",
    specs: [
      { label: "Type", value: "Vacuum + mop (single pad)" },
      { label: "Suction", value: "12,000 Pa" },
      { label: "Navigation", value: "LiDAR" },
      { label: "Height", value: "—" },
      { label: "Noise", value: "66 dB (loudest here)" },
      { label: "Self-empty dock", value: "Yes" },
      { label: "Runtime", value: "—" },
      { label: "Control", value: "Wi-Fi app + voice" },
    ],
    price: null,
    linkId: "tapo-rv30-max-plus",
    retailer: "Amazon.ie",
    image: "/img/products/tapo-rv30-max-plus.webp",
    imageAlt: "TP-Link Tapo RV30 Max Plus robot vacuum",
  },
  {
    id: "irobot-roomba-694",
    name: "iRobot Roomba 694",
    badge: "Best for pet hair",
    category: "cleaning",
    specs: [
      { label: "Type", value: "Vacuum only" },
      { label: "Suction", value: "3-stage brush (strong on pet hair)" },
      { label: "Navigation", value: "Random / reactive (no mapping)" },
      { label: "Height", value: "—" },
      { label: "Noise", value: "—" },
      { label: "Self-empty dock", value: "No" },
      { label: "Runtime", value: "—" },
      { label: "Control", value: "Wi-Fi app + voice (well-rated app)" },
    ],
    price: null,
    linkId: "roomba-694",
    retailer: "Amazon.ie",
    image: "/img/products/irobot-roomba-694.webp",
    imageAlt: "iRobot Roomba 694 robot vacuum",
  },
];

/**
 * All robot-vacuum picks. The source guide is now published, so these surface
 * on the Cleaning category and the /best-picks "Cleaning" tab via
 * `getCategoryPicks("cleaning")` (which maps them to the shared `PickView`).
 *
 * They are still kept OUT of `getAllProducts()` and the air-fryer `/compare`
 * table on purpose: that `ComparisonTable` has air-fryer columns (capacity /
 * footprint / run cost) that don't fit a vacuum's spec sheet. A spec-aware
 * comparison for vacuums is a separate piece of work.
 */
export function getRobotVacuums(): RobotVacuum[] {
  return ROBOT_VACUUMS;
}

/* ------------------------------------------------------------------------- *
 * Category picks (Home Office / Smart Home / Storage)
 *
 * These categories don't have an air-fryer-style spec sheet or a robot-vacuum
 * spec list — each pick is a single product with one headline spec, a price and
 * a retailer link. So we model them with a light generic shape and surface them
 * through the same `PickView`/ProductCard as everything else.
 *
 * Honesty rules still apply: `badge` is an editorial "best for" label (not a
 * rating); `price` is `null` when we couldn't confirm a live Irish price (the UI
 * shows "Check price"); every `linkId` resolves in lib/site.ts and routes
 * through `/go/[linkId]` (rel="sponsored nofollow"). Specs/prices were checked
 * on live Irish retailer pages in June 2026 — re-check before relying on them.
 *
 * NOTE: these don't yet have a source guide (a follow-up). Until one exists, the
 * card title links to the category page rather than a dead end.
 * ------------------------------------------------------------------------- */

export type CategoryPick = {
  id: string;
  name: string;
  /** Editorial "best for" label shown in place of a rating. */
  badge: string;
  /** Category slug (see lib/site.ts CATEGORIES). */
  category: string;
  /** The single headline spec shown on the card. */
  spec: { label: string; value: string };
  /** Approx. price string, or null when not confirmed (UI shows "Check price"). */
  price: string | null;
  /** Affiliate link id (see lib/site.ts) used by the /go redirect. */
  linkId: string;
  /** Retailer name for the "Check price at …" CTA. */
  retailer: string;
  /** Real product photo (see `Product.image`); falls back to an illustration. */
  image?: string;
  imageAlt: string;
};

export const CATEGORY_PICKS: CategoryPick[] = [
  // --- Home Office (compact, renter-friendly WFH gear) ---------------------
  {
    id: "ikea-micke-desk",
    name: "IKEA MICKE Desk 73×50 cm",
    badge: "Smallest desk",
    category: "home-office",
    spec: { label: "Footprint", value: "73 × 50 cm" },
    price: "~€55",
    linkId: "ikea-micke-desk",
    retailer: "IKEA",
    image: "/img/products/ikea-micke-desk.webp",
    imageAlt: "IKEA MICKE desk",
  },
  {
    id: "ikea-lagkapten-alex",
    name: "IKEA LAGKAPTEN / ALEX Desk 120×60 cm",
    badge: "Best desk with storage",
    category: "home-office",
    spec: { label: "Footprint", value: "120 × 60 cm" },
    price: "~€115",
    linkId: "ikea-lagkapten-alex",
    retailer: "IKEA",
    image: "/img/products/ikea-lagkapten-alex.webp",
    imageAlt: "IKEA LAGKAPTEN desk with ALEX drawer unit",
  },
  {
    id: "ikea-millberget-chair",
    name: "IKEA MILLBERGET Swivel Chair",
    badge: "Best budget chair",
    category: "home-office",
    spec: { label: "Footprint", value: "70 × 70 cm" },
    price: "~€99",
    linkId: "ikea-millberget-chair",
    retailer: "IKEA",
    image: "/img/products/ikea-millberget-chair.webp",
    imageAlt: "IKEA MILLBERGET swivel chair",
  },
  {
    id: "allsop-redmond-stand",
    name: "Allsop Redmond Curved Monitor Stand",
    badge: "Best monitor riser",
    category: "home-office",
    spec: { label: "Footprint", value: "37 × 28.6 cm" },
    price: "~€44.90",
    linkId: "allsop-redmond-stand",
    retailer: "Harvey Norman",
    image: "/img/products/allsop-redmond-stand.webp",
    imageAlt: "Allsop Redmond adjustable monitor/laptop stand",
  },
  {
    id: "ikea-navlinge-lamp",
    name: "IKEA NÄVLINGE LED Clamp Spotlight",
    badge: "Best desk lamp",
    category: "home-office",
    spec: { label: "Footprint", value: "Clamp-on (zero desk space)" },
    price: "~€12",
    linkId: "ikea-navlinge-lamp",
    retailer: "IKEA",
    image: "/img/products/ikea-navlinge-lamp.webp",
    imageAlt: "IKEA NÄVLINGE LED clamp spotlight",
  },
  {
    id: "ikea-dagotto-footrest",
    name: "IKEA DAGOTTO Foot-rest",
    badge: "Best footrest",
    category: "home-office",
    spec: { label: "Footprint", value: "49 × 38 cm" },
    price: "~€13",
    linkId: "ikea-dagotto-footrest",
    retailer: "IKEA",
    image: "/img/products/ikea-dagotto-footrest.webp",
    imageAlt: "IKEA DAGOTTO foot-rest",
  },

  // --- Smart Home (renter-friendly: plug-in / stick-on, no drilling) -------
  {
    id: "tapo-p110-plug",
    name: "TP-Link Tapo P110 Mini Smart Plug",
    badge: "Best smart plug",
    category: "smart-home",
    spec: { label: "Install", value: "Plug-in, no hub" },
    price: "~€10.99",
    linkId: "tapo-p110-plug",
    retailer: "ElectroCity.ie",
    image: "/img/products/tapo-p110-plug.webp",
    imageAlt: "TP-Link Tapo P110 smart plug",
  },
  {
    id: "tapo-l530e-bulb",
    name: "TP-Link Tapo L530E Smart Colour Bulb (E27)",
    badge: "Cheapest smart bulb",
    category: "smart-home",
    spec: { label: "Connectivity", value: "Wi-Fi, no hub" },
    price: "~€10.95",
    linkId: "tapo-l530e-bulb",
    retailer: "Expert.ie",
    image: "/img/products/tapo-l530e-bulb.webp",
    imageAlt: "TP-Link Tapo L530E smart bulb",
  },
  {
    id: "echo-dot-5",
    name: "Amazon Echo Dot (5th Gen)",
    badge: "Best smart speaker",
    category: "smart-home",
    spec: { label: "Install", value: "Plug-in, voice control" },
    price: null,
    linkId: "echo-dot-5",
    retailer: "Currys",
    imageAlt: "Illustration of a smart-home voice speaker",
  },
  {
    id: "tapo-l900-strip",
    name: "TP-Link Tapo L900-5 Smart Light Strip (5 m)",
    badge: "Best light strip",
    category: "smart-home",
    spec: { label: "Mounting", value: "3M stick-on, no hub" },
    price: "~€19.99",
    linkId: "tapo-l900-strip",
    retailer: "DID.ie",
    image: "/img/products/tapo-l900-strip.webp",
    imageAlt: "TP-Link Tapo L900-5 smart light strip",
  },
  {
    id: "tapo-contact-sensor",
    name: "TP-Link Tapo H100 Hub + T110 Contact Sensor",
    badge: "Best door/window sensor",
    category: "smart-home",
    spec: { label: "Mounting", value: "3M stick-on, hub included" },
    price: null,
    linkId: "tapo-contact-sensor",
    retailer: "Harvey Norman",
    image: "/img/products/tapo-contact-sensor.webp",
    imageAlt: "TP-Link Tapo T110 contact sensor",
  },
  {
    id: "tado-radiator-v3",
    name: "tado° Smart Radiator Thermostat Starter Kit V3+",
    badge: "Best heating control",
    category: "smart-home",
    spec: { label: "Install", value: "Screws onto valve, no plumbing" },
    price: "~€110",
    linkId: "tado-radiator-v3",
    retailer: "EnergyUpgrade.ie",
    image: "/img/products/tado-radiator-v3.webp",
    imageAlt: "tado° smart radiator thermostat starter kit",
  },

  // --- Storage (space-saving, renter-safe, no fixings) ---------------------
  {
    id: "ikea-samla-45",
    name: "IKEA SAMLA Box, transparent (45 L)",
    badge: "Best stackable box",
    category: "storage",
    spec: { label: "Size", value: "56 × 39 × 28 cm (45 L)" },
    price: "~€6",
    linkId: "ikea-samla-45",
    retailer: "IKEA",
    image: "/img/products/ikea-samla-45.webp",
    imageAlt: "IKEA SAMLA transparent storage box",
  },
  {
    id: "ikea-skubb-case",
    name: "IKEA SKUBB Storage Case",
    badge: "Best under-bed box",
    category: "storage",
    spec: { label: "Size", value: "43 × 53 × 19 cm" },
    price: "~€7",
    linkId: "ikea-skubb-case",
    retailer: "IKEA",
    image: "/img/products/ikea-skubb-case.webp",
    imageAlt: "IKEA SKUBB storage case",
  },
  {
    id: "ikea-stuk-case",
    name: "IKEA STUK Storage Case",
    badge: "Best slim under-bed case",
    category: "storage",
    spec: { label: "Size", value: "71 × 51 × 18 cm" },
    price: null,
    linkId: "ikea-stuk-case",
    retailer: "IKEA",
    image: "/img/products/ikea-stuk-case.webp",
    imageAlt: "IKEA STUK storage case (white/black)",
  },
  {
    id: "ikea-mulig-rail",
    name: "IKEA MULIG Clothes Rack",
    badge: "Best clothes rail",
    category: "storage",
    spec: { label: "Capacity", value: "20 kg · 99 × 46 × 152 cm" },
    price: "~€8",
    linkId: "ikea-mulig-rail",
    retailer: "IKEA",
    image: "/img/products/ikea-mulig-rail.webp",
    imageAlt: "IKEA MULIG clothes rack",
  },
  {
    id: "ikea-skubb-shoe",
    name: "IKEA SKUBB Hanging Organiser (16 pockets)",
    badge: "Best vertical organiser",
    category: "storage",
    spec: { label: "Size", value: "16 pockets · 33 × 56 cm" },
    price: "~€8",
    linkId: "ikea-skubb-shoe",
    retailer: "IKEA",
    image: "/img/products/ikea-skubb-shoe.webp",
    imageAlt: "IKEA SKUBB hanging organiser with 16 pockets",
  },
  {
    id: "jml-vac-pack-go",
    name: "JML Vac Pack Go (portable vacuum pump)",
    badge: "Best space-saver",
    category: "storage",
    spec: { label: "Compression", value: "~3× more in the same bag" },
    price: "~€24.95",
    linkId: "jml-vac-pack-go",
    retailer: "Homevalue.ie",
    image: "/img/products/jml-vac-pack-go.webp",
    imageAlt: "JML Vac Pack Go portable vacuum storage system",
  },
];

/* ------------------------------------------------------------------------- *
 * Unified card view
 *
 * Air fryers (`Product`) and robot vacuums (`RobotVacuum`) have different spec
 * shapes, but the Best Picks grid and category pages render a single card for
 * both. `PickView` is that shared, display-ready shape: one headline spec plus
 * a price and a CTA. Mapping here keeps the components dumb and the honesty
 * rules intact (price stays `null` → "Check price"; no invented numbers).
 * ------------------------------------------------------------------------- */

export type PickView = {
  id: string;
  name: string;
  /** Editorial "best for" label shown in place of a rating. */
  badge: string;
  /** Real product photo when we have one; card falls back to an illustration. */
  image?: string;
  imageAlt: string;
  /** The single headline spec shown on the card. */
  spec: { label: string; value: string };
  /** Approx. price string, or null → the card shows "Check price". */
  price: string | null;
  linkId: string;
  /** Where the card title links (product page or source guide). */
  href: string;
};

function airFryerToPick(product: Product): PickView {
  return {
    id: product.id,
    name: product.name,
    badge: product.badge,
    image: product.image,
    imageAlt: product.imageAlt,
    spec: { label: "Footprint", value: product.footprint },
    price: product.price,
    linkId: product.linkId,
    href: getProductHref(product, AIR_FRYER_GUIDE_SLUG),
  };
}

/**
 * The most space-relevant *confirmed* spec for a robot card: height if we have
 * it (it's what decides whether it fits under low rented furniture), otherwise
 * the type. Never surfaces a "—" placeholder as if it were a real figure.
 */
function vacuumHeadlineSpec(vacuum: RobotVacuum): { label: string; value: string } {
  const height = vacuum.specs.find((s) => s.label === "Height" && s.value !== "—");
  if (height) return height;
  const type = vacuum.specs.find((s) => s.label === "Type");
  return type ?? vacuum.specs[0];
}

function vacuumToPick(vacuum: RobotVacuum): PickView {
  return {
    id: vacuum.id,
    name: vacuum.name,
    badge: vacuum.badge,
    image: vacuum.image,
    imageAlt: vacuum.imageAlt,
    spec: vacuumHeadlineSpec(vacuum),
    price: vacuum.price,
    linkId: vacuum.linkId,
    href: `/guide/${ROBOT_VACUUM_GUIDE_SLUG}`,
  };
}

function categoryPickToPick(item: CategoryPick): PickView {
  return {
    id: item.id,
    name: item.name,
    badge: item.badge,
    image: item.image,
    imageAlt: item.imageAlt,
    spec: item.spec,
    price: item.price,
    linkId: item.linkId,
    // No source guide/product page yet — link to the category page (not a dead
    // end). Switch to `/guide/<slug>` when each category's guide is written.
    href: `/${item.category}`,
  };
}

/** Featured picks for the homepage grid, as display-ready cards. */
export function getFeaturedPicks(): PickView[] {
  return AIR_FRYERS.map(airFryerToPick);
}

/**
 * Display-ready picks for a category slug, merging every product type that
 * belongs to it. Robot vacuums now surface under "cleaning" (their guide is
 * published). Add new categories' picks here as their guides ship.
 */
export function getCategoryPicks(category: string): PickView[] {
  const picks: PickView[] = AIR_FRYERS.filter(
    (product) => product.category === category,
  ).map(airFryerToPick);

  if (category === "cleaning") {
    picks.push(...ROBOT_VACUUMS.map(vacuumToPick));
  }

  picks.push(
    ...CATEGORY_PICKS.filter((item) => item.category === category).map(
      categoryPickToPick,
    ),
  );

  return picks;
}
