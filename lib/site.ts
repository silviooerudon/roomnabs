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

/**
 * Amazon Associates tracking tag (Ireland store), appended automatically to any
 * amazon.* destination by the `/go/[linkId]` redirect — see `appendAmazonTag`.
 * Kept in one place so the tag is never repeated link-by-link in `LINKS`.
 * Overridable via the `AMAZON_ASSOCIATE_TAG` env var (server-only) so it can be
 * changed without a code edit; defaults to our approved tag.
 */
export const AMAZON_ASSOCIATE_TAG =
  process.env.AMAZON_ASSOCIATE_TAG ?? "roomnabs-21";

/**
 * Append our Amazon Associates `tag` to an amazon.* URL, unless it already has
 * one. Non-Amazon URLs (and anything unparseable) are returned untouched. The
 * `/go` redirect uses this so affiliate attribution lives in one place.
 */
export function appendAmazonTag(rawUrl: string): string {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return rawUrl;
  }

  const isAmazon = /(^|\.)amazon\./i.test(url.hostname);
  if (isAmazon && !url.searchParams.has("tag")) {
    url.searchParams.set("tag", AMAZON_ASSOCIATE_TAG);
  }
  return url.toString();
}

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

  // Air-fryer guide "Check price" links. Now point to Amazon.ie product pages
  // (base /dp/ASIN URLs) — the Amazon Associates tag is appended automatically
  // by the /go redirect (see appendAmazonTag), so it's never repeated here.
  // Rendered with rel="sponsored nofollow" and reached via the 302 /go redirect.
  {
    id: "af100uk-amazon",
    label: "Ninja Air Fryer 3.8L (AF100UK) at Amazon.ie",
    url: "https://www.amazon.ie/dp/B07PBBW4XF",
  },
  {
    id: "af180uk-amazon",
    label: "Ninja MAX PRO 6.2L (AF180UK) at Amazon.ie",
    url: "https://www.amazon.ie/dp/B0CP43NP25",
  },
  {
    // Was a Euronics deeplink (broke on catalogue changes, no commission). Now an
    // Amazon.ie search; the /go redirect appends our tag automatically.
    // TODO: swap for an Amazon.ie /dp/ASIN once confirmed via SiteStripe.
    id: "crispi-fn101-euronics",
    label: "Ninja CRISPi FN101UKGY at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Ninja+CRISPi+FN101UKGY",
  },
  {
    id: "morphy-480005-amazon",
    label: "Morphy Richards 3L (480005) at Amazon.ie",
    url: "https://www.amazon.ie/dp/B09WR31JC5",
  },
  {
    id: "philips-na230-amazon",
    label: "Philips 2000 (NA230/09) at Amazon.ie",
    url: "https://www.amazon.ie/dp/B0CWP7WXB6",
  },
  {
    id: "tefal-eyf-amazon",
    label: "Tefal Easy Fry Max 5L (EY245840) at Amazon.ie",
    url: "https://www.amazon.ie/dp/B0CKLMQMYJ",
  },

  // Compact coffee machines guide (Ireland). Smaller Irish-retailer deeplinks
  // kept 404'ing on catalogue changes (and earned no commission), so these are
  // now Amazon.ie searches — the /go redirect appends our tag automatically.
  // Same 302 + sponsored nofollow treatment as the air-fryer links above.
  {
    id: "essenza-mini",
    label: "Nespresso Krups Essenza Mini XN110840 at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Nespresso+Krups+Essenza+Mini+XN110840",
  },
  {
    id: "vertuo-pop-hn",
    label: "De'Longhi Nespresso Vertuo Pop ENV90.B at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Delonghi+Nespresso+Vertuo+Pop+ENV90.B",
  },
  {
    id: "pixie-hn",
    label: "Krups Nespresso Pixie XN306T40 at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Krups+Nespresso+Pixie+XN306T40",
  },
  {
    id: "dedica",
    label: "De'Longhi Dedica EC685M at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Delonghi+Dedica+EC685M",
  },
  {
    id: "bambino-plus-hn",
    label: "Sage the Bambino Plus SES500 at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Sage+Bambino+Plus+SES500",
  },
  {
    id: "magnifica-s",
    label: "De'Longhi Magnifica S ECAM22.320.SB at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Delonghi+Magnifica+S+ECAM22.320.SB",
  },
  {
    id: "dolce-gusto-genio",
    label: "NESCAFÉ Dolce Gusto Genio S Plus at Amazon",
    url: "https://www.amazon.ie/dp/B08KZZJ94V",
  },
  {
    id: "rh-buckingham-did",
    label: "Russell Hobbs Buckingham Filter Coffee Maker 20680 at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Russell+Hobbs+Buckingham+Coffee+Maker+20680",
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

  // Home Office picks (compact / renter-friendly WFH gear). IKEA items keep their
  // direct product URLs; the non-IKEA pick (Allsop) is an Amazon.ie search since
  // the retailer deeplink was fragile and earned no commission. Same 302 +
  // sponsored nofollow treatment as the links above.
  {
    id: "ikea-micke-desk",
    label: "IKEA MICKE Desk 73×50 cm at IKEA",
    url: "https://www.ikea.com/ie/en/p/micke-desk-white-30213076/",
  },
  {
    id: "ikea-lagkapten-alex",
    label: "IKEA LAGKAPTEN / ALEX Desk 120×60 cm at IKEA",
    url: "https://www.ikea.com/ie/en/p/lagkapten-alex-desk-white-s69416817/",
  },
  {
    id: "ikea-millberget-chair",
    label: "IKEA MILLBERGET Swivel Chair at IKEA",
    url: "https://www.ikea.com/ie/en/p/millberget-swivel-chair-murum-black-20489396/",
  },
  {
    id: "allsop-redmond-stand",
    label: "Allsop Redmond Curved Monitor Stand at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Allsop+Redmond+Curved+Monitor+Stand",
  },
  {
    id: "ikea-navlinge-lamp",
    label: "IKEA NÄVLINGE LED Clamp Spotlight at IKEA",
    url: "https://www.ikea.com/ie/en/p/naevlinge-led-clamp-spotlight-white-10449891/",
  },
  {
    id: "ikea-dagotto-footrest",
    label: "IKEA DAGOTTO Foot-rest at IKEA",
    url: "https://www.ikea.com/ie/en/p/dagotto-foot-rest-black-40240989/",
  },

  // Smart Home picks (renter-friendly: plug-in / stick-on, no drilling). These
  // were small-retailer deeplinks that broke on catalogue changes and earned no
  // commission, so they're now Amazon.ie searches (tag appended by /go).
  {
    id: "tapo-p110-plug",
    label: "TP-Link Tapo P110 Mini Smart Plug at Amazon.ie",
    url: "https://www.amazon.ie/s?k=TP-Link+Tapo+P110+Smart+Plug",
  },
  {
    id: "tapo-l530e-bulb",
    label: "TP-Link Tapo L530E Smart Colour Bulb (E27) at Amazon.ie",
    url: "https://www.amazon.ie/s?k=TP-Link+Tapo+L530E+Smart+Bulb+E27",
  },
  {
    id: "echo-dot-5",
    label: "Amazon Echo Dot 5th Gen at Amazon.ie",
    url: "https://www.amazon.ie/s?k=Amazon+Echo+Dot+5th+Gen",
  },
  {
    id: "tapo-l900-strip",
    label: "TP-Link Tapo L900-5 Smart Light Strip (5 m) at Amazon.ie",
    url: "https://www.amazon.ie/s?k=TP-Link+Tapo+L900-5+Smart+Light+Strip",
  },
  {
    id: "tapo-contact-sensor",
    label: "TP-Link Tapo T110 Contact Sensor at Amazon.ie",
    url: "https://www.amazon.ie/s?k=TP-Link+Tapo+T110+Contact+Sensor",
  },
  {
    id: "tado-radiator-v3",
    label: "tado° Smart Radiator Thermostat Starter Kit V3+ at Amazon.ie",
    url: "https://www.amazon.ie/s?k=tado+Smart+Radiator+Thermostat+Starter+Kit+V3",
  },

  // Storage picks (space-saving, renter-safe, no fixings).
  {
    id: "ikea-samla-45",
    label: "IKEA SAMLA Box transparent 45 L at IKEA",
    url: "https://www.ikea.com/ie/en/p/samla-box-transparent-30102974/",
  },
  {
    id: "ikea-skubb-case",
    label: "IKEA SKUBB Storage Case at IKEA",
    url: "https://www.ikea.com/ie/en/p/skubb-storage-case-white-60591047/",
  },
  {
    id: "ikea-stuk-case",
    label: "IKEA STUK Storage Case at IKEA",
    url: "https://www.ikea.com/ie/en/p/stuk-storage-case-white-grey-50309577/",
  },
  {
    id: "ikea-mulig-rail",
    label: "IKEA MULIG Clothes Rack at IKEA",
    url: "https://www.ikea.com/ie/en/p/mulig-clothes-rack-white-60179434/",
  },
  {
    id: "ikea-skubb-shoe",
    label: "IKEA SKUBB Hanging Organiser (16 pockets) at IKEA",
    url: "https://www.ikea.com/ie/en/p/skubb-hanging-shoe-organiser-w-16-pockets-dark-grey-90400008/",
  },
  {
    id: "jml-vac-pack-go",
    label: "JML Vac Pack Go portable vacuum pump at Amazon.ie",
    url: "https://www.amazon.ie/s?k=JML+Vac+Pack+Go",
  },
];

export function findLink(id: string): ShortLink | undefined {
  return LINKS.find((link) => link.id === id);
}

/**
 * Footer "Explore" column — the primary destinations (Best Picks / Comparisons
 * / Guides). "Deals" is omitted on purpose while that page has no real content;
 * re-add it here (and in the header nav) once there are verified deals to show.
 */
export const EXPLORE_LINKS: { href: string; label: string }[] = [
  { href: "/best-picks", label: "Best Picks" },
  { href: "/compare", label: "Comparisons" },
  { href: "/guides", label: "Guides" },
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
