/**
 * Structured spec data for the guide product cards and quick-picks comparison
 * tables (rendered by GuideProductCard / GuideComparison in MDX).
 *
 * Why this lives here rather than inline in the MDX: `next-mdx-remote/rsc` only
 * passes *string* attributes to MDX components — JSX expression attributes
 * (`specs={[…]}`) are dropped at runtime. So the array/table data is keyed here
 * and referenced from the MDX by a string id (`linkId` for cards, `table` for
 * the comparison). The prose (each card's description) still lives in the MDX.
 *
 * ⚠️ Values are transcribed verbatim from the guides — nothing is invented.
 * Prices the guide hasn't confirmed (e.g. "[POD COST: verify…]") are kept as-is.
 */

/** A single spec row in a product card. `label` omitted = a value-only chip. */
export type GuideSpec = { label?: string; value: string };

/** Card specs keyed by the product's `linkId` (see lib/site.ts / the MDX). */
export const GUIDE_SPECS: Record<string, GuideSpec[]> = {
  // --- Compact coffee machines guide ---
  "essenza-mini": [
    { label: "Width", value: "8.4 cm" },
    { label: "Dimensions", value: "8.4 × 33 × 20.4 cm" },
    { label: "Tank", value: "0.6 L" },
    { label: "Type", value: "pod (Nespresso Original)" },
    { label: "Cost per cup", value: "[POD COST: verify on Nespresso.ie]" },
    { label: "Milk frother", value: "no" },
    { label: "Descaling", value: "yes" },
    { label: "Warranty", value: "2 years" },
  ],
  "vertuo-pop-hn": [
    { label: "Width", value: "13.6 cm" },
    { label: "Dimensions", value: "13.6 × 25 × 42.6 cm" },
    { label: "Tank", value: "0.6 L" },
    { label: "Type", value: "pod (Vertuo)" },
    { label: "Cost per cup", value: "[POD COST: verify on Nespresso.ie]" },
    { label: "Milk frother", value: "no (Aeroccino sold separately)" },
    { label: "Descaling", value: "yes" },
    { label: "Warranty", value: "2 years" },
  ],
  "pixie-hn": [
    { label: "Width", value: "11.1 cm" },
    { label: "Dimensions", value: "11.1 × 32.6 × 23.5 cm" },
    { label: "Tank", value: "0.7 L" },
    { label: "Type", value: "pod (Nespresso Original)" },
    { label: "Cost per cup", value: "[POD COST: verify on Nespresso.ie]" },
    { label: "Milk frother", value: "no" },
    { label: "Descaling", value: "yes" },
    { label: "Warranty", value: "2 years" },
  ],
  dedica: [
    { label: "Width", value: "14.9 cm" },
    { label: "Dimensions", value: "14.9 × 33 × 30.5 cm" },
    { label: "Tank", value: "1.1 L" },
    { label: "Type", value: "espresso, ground (+ ESE pods)" },
    { label: "Cost per cup", value: "~€0.13 (ground, estimated)" },
    { label: "Milk frother", value: "manual steam wand" },
    { label: "Descaling", value: "yes (EcoDecalk)" },
    { label: "Warranty", value: "2 years" },
  ],
  "bambino-plus-hn": [
    { label: "Width", value: "19.4 cm" },
    { label: "Dimensions", value: "19.4 × 36.2 × 30.4 cm" },
    { label: "Tank", value: "1.9 L" },
    { label: "Type", value: "espresso, ground (54 mm portafilter)" },
    { label: "Cost per cup", value: "~€0.32 (ground, estimated)" },
    { label: "Milk frother", value: "automatic microfoam steam wand" },
    { label: "Descaling", value: "yes" },
    { label: "Warranty", value: "2 years" },
  ],
  "magnifica-s": [
    { label: "Width", value: "23.8 cm" },
    { label: "Dimensions", value: "23.8 × 43 × 35.1 cm" },
    { label: "Tank", value: "1.8 L" },
    { label: "Type", value: "bean-to-cup" },
    { label: "Cost per cup", value: "~€0.21 (beans, estimated)" },
    { label: "Milk frother", value: "manual wand" },
    { label: "Descaling", value: "yes (programmable hardness)" },
    { label: "Warranty", value: "2 years" },
  ],
  "dolce-gusto-genio": [
    { label: "Width", value: "14.3 cm" },
    { label: "Dimensions", value: "~14.3 × 32.6 × 32.7 cm" },
    { label: "Tank", value: "0.8 L" },
    { label: "Type", value: "pod (Dolce Gusto)" },
    { label: "Cost per cup", value: "~€0.37 (pod)" },
    { label: "Milk frother", value: "via milk pods" },
    { label: "Descaling", value: "yes" },
    { label: "Warranty", value: "2 years" },
  ],
  "rh-buckingham-did": [
    { label: "Width", value: "23 cm" },
    { label: "Dimensions", value: "23 × 20.5 × 32.5 cm" },
    { label: "Tank", value: "1.25 L" },
    { label: "Type", value: "filter / drip" },
    { label: "Cost per cup", value: "~€0.26 (ground, estimated)" },
    { label: "Milk frother", value: "no" },
    { label: "Descaling", value: "yes (manual)" },
    { label: "Warranty", value: "2 years" },
  ],

  // --- Air fryers guide ---
  "af100uk-hn": [
    { label: "Footprint", value: "952 cm²" },
    { label: "Fits under ~45 cm cabinet", value: "yes (~10 cm clearance)" },
    { label: "Power", value: "1550 W" },
    { value: "~€0.19 per 20-min cook" },
    { label: "Capacity", value: "3.8 L single basket" },
    { label: "Window", value: "no" },
    { label: "Dishwasher-safe basket", value: "yes" },
    { label: "Warranty", value: "2 years (with registration)" },
  ],
  "morphy-480005-currys": [
    { label: "Footprint", value: "940.2 cm²" },
    { label: "Fits under ~45 cm cabinet", value: "yes" },
    { label: "Power", value: "1400 W" },
    { value: "~€0.17 per 20-min cook (lowest here)" },
    { label: "Capacity", value: "3 L single basket" },
    { label: "Window", value: "no" },
    { label: "Dishwasher-safe parts", value: "yes" },
    { label: "Warranty", value: "2 years" },
  ],
  "tefal-eyf-amazon": [
    { label: "Footprint", value: "884.5 cm² (smallest)" },
    { label: "Height", value: "37.5 cm (tallest)" },
    { label: "Clearance under ~45 cm", value: "tight (~7.5 cm)" },
    { label: "Power", value: "1500 W" },
    { value: "~€0.18 per 20-min cook" },
    { label: "Capacity", value: "5 L single basket" },
    { label: "Window", value: "no" },
    { label: "Dishwasher-safe parts", value: "yes" },
    { label: "Warranty", value: "2 years" },
  ],
  "af180uk-currys": [
    { label: "Footprint", value: "1008 cm²" },
    { label: "Fits under ~45 cm cabinet", value: "yes (lowest height, generous clearance)" },
    { label: "Power", value: "2470 W" },
    { value: "~€0.30 per 20-min cook (highest here)" },
    { label: "Capacity", value: "6.2 L single basket" },
    { label: "Window", value: "no" },
    { label: "Dishwasher-safe basket", value: "yes" },
    { label: "Warranty", value: "2 years" },
  ],
  "philips-na230-amazon": [
    { label: "Footprint", value: "1248.4 cm² (largest, mostly from 40.4 cm depth)" },
    { label: "Fits under ~45 cm cabinet", value: "yes" },
    { label: "Power", value: "1700 W" },
    { value: "~€0.21 per 20-min cook" },
    { label: "Capacity", value: "6.2 L single basket" },
    { label: "Window", value: "yes" },
    { label: "Dishwasher-safe parts", value: "yes" },
    { label: "Warranty", value: "2 years" },
  ],
  "crispi-fn101-euronics": [
    { label: "Footprint", value: "1033.6 cm²" },
    { label: "Fits under ~45 cm cabinet", value: "yes" },
    { label: "Power", value: "1700 W" },
    { value: "~€0.21 per 20-min cook" },
    { label: "Capacity", value: "1.4 L + 3.8 L glass containers" },
    { label: "Window", value: "yes (glass)" },
    { label: "Dishwasher-safe", value: "containers, lids, plates (base by hand)" },
    { label: "Warranty", value: "2 years" },
  ],
};

/** Quick-picks comparison tables keyed by a guide id (the MDX `table` prop). */
export type QuickPicks = { headers: string[]; rows: string[][] };

export const GUIDE_QUICK_PICKS: Record<string, QuickPicks> = {
  "coffee-machines": {
    headers: ["Best for", "Model", "Type", "Width", "~Cost / cup", "Price"],
    rows: [
      ["Tiniest space", "Nespresso Essenza Mini", "Pod (Original)", "8.4 cm", "[POD COST: verify]", "Check price"],
      ["Best all-round pod", "Nespresso Vertuo Pop", "Pod (Vertuo)", "13.6 cm", "[POD COST: verify]", "~€99"],
      ["Slim real espresso", "De'Longhi Dedica EC685", "Espresso (ground)", "14.9 cm", "~€0.13", "Check price"],
      ["Cheapest per cup", "De'Longhi Dedica EC685", "Espresso (ground)", "14.9 cm", "~€0.13", "Check price"],
      ["Fresh beans, compact", "De'Longhi Magnifica S", "Bean-to-cup", "23.8 cm", "~€0.21", "~€430"],
      ["Premium espresso", "Sage Bambino Plus", "Espresso (ground)", "19.4 cm", "~€0.32", "~€479"],
      ["Variety / lattes", "Dolce Gusto Genio S Plus", "Pod", "14.3 cm", "~€0.37", "Check price"],
      ["Budget filter coffee", "Russell Hobbs Buckingham", "Filter / drip", "23 cm", "~€0.26", "~€62.99"],
    ],
  },
  "air-fryers": {
    headers: ["Best for", "Model", "Capacity", "Footprint (W×D)", "Height", "~Cost / 20-min cook", "Price"],
    rows: [
      ["Overall, 1–2 people", "Ninja Air Fryer 3.8L (AF100UK)", "3.8 L", "28 × 34 cm", "35 cm", "~€0.19", "~€94.95"],
      ["Cheapest to run, solo", "Morphy Richards Digital 3L (480005)", "3 L", "33.7 × 27.9 cm", "31.3 cm", "~€0.17", "Check price"],
      ["Smallest footprint", "Tefal Easy Fry Max 5L (EY245840)", "5 L", "27.3 × 32.4 cm", "37.5 cm", "~€0.18", "Check price"],
      ["Batch / shared house", "Ninja MAX PRO 6.2L (AF180UK)", "6.2 L", "28 × 36 cm", "30.5 cm", "~€0.30", "~€149.99"],
      ["Best value, bigger", "Philips 2000 Series (NA230/09)", "6.2 L", "30.9 × 40.4 cm", "30.8 cm", "~€0.21", "~€92.68"],
      ["Premium / versatile", "Ninja CRISPi Glass (FN101UKGY)", "1.4 + 3.8 L", "30.4 × 34 cm", "34.5 cm", "~€0.21", "~€179"],
    ],
  },
};
