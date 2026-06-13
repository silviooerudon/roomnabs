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

/**
 * Placeholder link registry used by the dynamic `/go/[linkId]` route.
 *
 * In a real deployment this would come from a database / API. It is kept here
 * as static data only to demonstrate that dynamic routing and SSR work on
 * Netlify. Replace this with your real data source.
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
