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

/** Single contact address used on legal pages and the contact form. */
export const CONTACT_EMAIL = "hello@roomnabs.com";

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
];

export function findLink(id: string): ShortLink | undefined {
  return LINKS.find((link) => link.id === id);
}
