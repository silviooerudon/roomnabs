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
    imageAlt: "Placeholder image of the Ninja 3.8L Air Fryer (AF100UK)",
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
    imageAlt:
      "Placeholder image of the Philips 2000 Series air fryer (NA230/09)",
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
    imageAlt: "Placeholder image of the Tefal Easy Fry Max 5L air fryer",
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
    imageAlt: "Placeholder image of the Morphy Richards Digital 3L air fryer",
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
    imageAlt: "Placeholder image of the Ninja MAX PRO 6.2L air fryer (AF180UK)",
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
    imageAlt: "Placeholder image of the Ninja CRISPi portable glass air fryer",
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
    imageAlt: "Placeholder image of the Eufy RoboVac 11S MAX robot vacuum",
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
    imageAlt: "Placeholder image of the Lefant M210 Pro robot vacuum",
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
    imageAlt: "Placeholder image of the Eufy C10 robot vacuum",
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
    imageAlt: "Placeholder image of the Roborock Q5 robot vacuum",
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
    imageAlt:
      "Placeholder image of the TP-Link Tapo RV30 Max Plus robot vacuum",
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
    imageAlt: "Placeholder image of the iRobot Roomba 694 robot vacuum",
  },
];

/**
 * All robot-vacuum picks. Kept separate from `getAllProducts()` /
 * `getProductsByCategory()` on purpose: the source guide is still a draft, so
 * these must NOT surface on public pages (homepage, /compare, /best-picks, the
 * Cleaning category) yet — exactly like a draft guide stays reachable but
 * unlisted. When the guide is published, wire these into the category queries
 * (and build a spec-aware comparison, since the air-fryer `ComparisonTable`
 * columns don't fit this shape).
 */
export function getRobotVacuums(): RobotVacuum[] {
  return ROBOT_VACUUMS;
}
