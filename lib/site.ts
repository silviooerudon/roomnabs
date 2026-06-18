/**
 * Central site configuration.
 *
 * `SITE_URL` is read from the NEXT_PUBLIC_SITE_URL environment variable so the
 * canonical/sitemap/robots URLs are correct in production. On Netlify you can
 * set this in the site's environment settings (e.g. https://roomnabs.com or the
 * generated *.netlify.app URL). It falls back to localhost for local dev.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

/** Display name used across the UI and metadata. */
export const SITE_NAME = "roomnabs";

/** Single contact address used on the contact page and across legal pages. */
export const CONTACT_EMAIL = "contact@roomnabs.com";

/**
 * Product categories shown in the header navigation. Each one currently points
 * to a placeholder category page; real product listings will replace the
 * placeholders later.
 */
export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "small-kitchen",
    name: "Small Kitchen",
    description:
      "Compact appliances and clever tools that make cooking in a tiny rental kitchen genuinely workable.",
  },
  {
    slug: "home-office",
    name: "Home Office",
    description:
      "Desks, chairs and accessories sized for a corner of a small apartment — not a dedicated study.",
  },
  {
    slug: "smart-home",
    name: "Smart Home",
    description:
      "Renter-friendly smart home gear that needs no drilling, rewiring or landlord permission.",
  },
  {
    slug: "storage",
    name: "Storage",
    description:
      "Space-saving storage that helps you fit a full life into a small, shared or temporary home.",
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    description:
      "Compact, renter-friendly cleaning gear — robot vacuums and the like that fit a small flat, slip under low furniture and won't mark a rented floor.",
  },
  {
    slug: "deals",
    name: "Deals",
    description:
      "Current discounts and price drops on the compact home and tech products we recommend.",
  },
];

export function findCategory(slug: string): Category | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

/** Legal / informational pages linked from the footer. */
export type LegalPage = {
  slug: string;
  title: string;
};

export const LEGAL_PAGES: LegalPage[] = [
  { slug: "about", title: "About" },
  { slug: "contact", title: "Contact" },
  { slug: "privacy-policy", title: "Privacy Policy" },
  { slug: "terms-of-use", title: "Terms of Use" },
  { slug: "cookie-policy", title: "Cookie Policy" },
  { slug: "affiliate-disclosure", title: "Affiliate Disclosure" },
  { slug: "editorial-policy", title: "Editorial Policy" },
];

/**
 * Placeholder link registry used by the dynamic `/go/[linkId]` route.
 *
 * In a real deployment this would come from a database / API. It is kept here
 * as static data only to power the affiliate redirect endpoint. Replace this
 * with your real data source.
 */
export type ShortLink = {
  id: string;
  url: string;
  label: string;
};

export const LINKS: ShortLink[] = [
  { id: "github", url: "https://github.com/silviooerudon/roomnabs", label: "GitHub repo" },
  { id: "netlify", url: "https://www.netlify.com/", label: "Netlify" },
  { id: "nextjs", url: "https://nextjs.org/", label: "Next.js" },

  // Retailer "Check price" links used by the guides. These are plain store
  // URLs for now (no affiliate deeplinks yet); they are rendered with
  // rel="sponsored nofollow" and reached via the 302 /go/[linkId] redirect.
  {
    id: "af100uk-hn",
    label: "Ninja 3.8L Air Fryer (AF100UK) at Harvey Norman",
    url: "https://www.harveynorman.ie/small-appliances/small-cooking-appliances/fryers/ninja-3.8l-air-fryer-af100uk-grey.html",
  },
  {
    id: "af180uk-currys",
    label: "Ninja Max Pro (AF180UK) at Currys",
    url: "https://www.currys.ie/products/ninja-max-pro-af180uk-air-fryer-black-10260190.html",
  },
  {
    id: "crispi-fn101-euronics",
    label: "Ninja Crispi 4-in-1 Portable (FN101) at Euronics",
    url: "https://euronics.ie/products/ninja-crispi-4-in-1-portable-glass-air-fryer-cooking-system-blue-fn101ukgy",
  },
  {
    id: "morphy-480005-currys",
    label: "Morphy Richards 480005 Air Fryer at Currys",
    url: "https://www.currys.ie/ieen/household-appliances/small-kitchen-appliances/small-cooking-appliances/fryers/morphy-richards-480005-air-fryer-black-10195164-pdt.html",
  },
  {
    id: "philips-na230-amazon",
    label: "Philips 2000 Series (NA230) Air Fryer at Currys",
    url: "https://www.currys.ie/products/philips-2000-series-na23009-air-fryer-black-10268603.html",
  },
  {
    id: "tefal-eyf-amazon",
    label: "Tefal Easy Fry (EY245840) Air Fryer at Amazon",
    url: "https://www.amazon.ie/Tefal-Dehydrate-Non-Stick-Dishwasher-EY245840/dp/B0CKLMQMYJ",
  },

  // Compact coffee machines guide (Ireland). Plain Irish-retailer store URLs
  // for now — affiliate deeplinks land in Phase 3. Same 302 + sponsored nofollow
  // treatment as the air-fryer links above.
  {
    id: "essenza-mini",
    label: "Nespresso by Krups Essenza Mini (XN110840) at Currys",
    url: "https://www.currys.ie/ieen/household-appliances/small-kitchen-appliances/coffee-machines-and-accessories/coffee-machines/nespresso-by-krups-essenza-mini-xn110840-coffee-machine-piano-black-10159576-pdt.html",
  },
  {
    id: "vertuo-pop-hn",
    label: "De'Longhi Nespresso Vertuo Pop (ENV90.B) at Harvey Norman",
    url: "https://www.harveynorman.ie/small-appliances/coffee-machines/nespresso-en/delonghi-nespresso-vertuo-pop-coffee-machine-env90.b-black.html",
  },
  {
    id: "pixie-hn",
    label: "Krups Nespresso Pixie (XN306T40) at Harvey Norman",
    url: "https://www.harveynorman.ie/small-appliances/coffee-machines/nespresso-en/krups-nespresso-pixie-coffee-machine-xn306t40-titanium.html",
  },
  {
    id: "dedica",
    label: "De'Longhi Dedica (EC685M) at Currys",
    url: "https://www.currys.ie/products/delonghi-dedica-ec685m-coffee-machine-silver-10172671.html",
  },
  {
    id: "bambino-plus-hn",
    label: "Sage the Bambino Plus (SES500) at Harvey Norman",
    url: "https://www.harveynorman.ie/small-appliances/coffee-machines/espresso/sage-the-bambino-plus-coffee-machine-ses500bss4guk1-brushed-stainless-steel.html",
  },
  {
    id: "magnifica-s",
    label: "De'Longhi Magnifica S (ECAM22.320.SB) at Currys",
    url: "https://www.currys.ie/ieen/household-appliances/small-kitchen-appliances/coffee-machines-and-accessories/coffee-machines/delonghi-magnifica-s-ecam-22-320-sb-bean-to-cup-coffee-machine-silver-21485747-pdt.html",
  },
  {
    id: "dolce-gusto-genio",
    label: "NESCAFÉ Dolce Gusto Genio S Plus at Amazon",
    url: "https://www.amazon.ie/dp/B08KZZJ94V",
  },
  {
    id: "rh-buckingham-did",
    label: "Russell Hobbs Buckingham Filter Coffee Maker (20680) at DID",
    url: "https://www.did.ie/products/russell-hobbs-125l-buckingham-filter-coffee-maker-stainless-steel-20680",
  },

  // Compact robot vacuums guide (small / rented apartments, Ireland-EU). We
  // aren't an Amazon Associate yet, so each `url` is an honest Amazon.ie SEARCH
  // for the model name — never a fabricated product page. Same 302 + sponsored
  // nofollow treatment as the links above.
  // TODO: trocar pelo deeplink de afiliado real após aprovação Amazon Associates.
  {
    id: "eufy-11s-max",
    label: "Eufy RoboVac 11S MAX at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Eufy+RoboVac+11S+MAX",
  },
  {
    id: "lefant-m210-pro",
    label: "Lefant M210 Pro at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Lefant+M210+Pro+robot+vacuum",
  },
  {
    id: "eufy-c10",
    label: "Eufy C10 at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Eufy+C10+robot+vacuum",
  },
  {
    id: "roborock-q5",
    label: "Roborock Q5 at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Roborock+Q5",
  },
  {
    id: "tapo-rv30-max-plus",
    label: "TP-Link Tapo RV30 Max Plus at Amazon.ie",
    url: "https://www.amazon.ie/s?k=TP-Link+Tapo+RV30+Max+Plus",
  },
  {
    id: "roomba-694",
    label: "iRobot Roomba 694 at Amazon.ie",
    url: "https://www.amazon.ie/s?k=iRobot+Roomba+694",
  },
];

export function findLink(id: string): ShortLink | undefined {
  return LINKS.find((link) => link.id === id);
}

/**
 * Footer "Explore" column — the primary destinations, mirroring the reference
 * footer (Best Picks / Comparisons / Guides / Deals).
 */
export const EXPLORE_LINKS: { href: string; label: string }[] = [
  { href: "/best-picks", label: "Best Picks" },
  { href: "/compare", label: "Comparisons" },
  { href: "/guides", label: "Guides" },
  { href: "/deals", label: "Deals" },
];

/**
 * Social links shown in the footer "Follow Us" column.
 *
 * Only the email link is live. The social handles are placeholders ("#") until
 * the real accounts exist — replace the `href`s when they do.
 */
export type SocialLink = {
  id: "instagram" | "youtube" | "pinterest" | "email";
  label: string;
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { id: "instagram", label: "Instagram", href: "#" },
  { id: "youtube", label: "YouTube", href: "#" },
  { id: "pinterest", label: "Pinterest", href: "#" },
  { id: "email", label: "Email us", href: `mailto:${CONTACT_EMAIL}` },
];
