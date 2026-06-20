import Script from "next/script";

/**
 * Loads a privacy-first, cookieless analytics script — but only when it's
 * configured. Set these in your environment (e.g. Netlify site settings):
 *
 *   NEXT_PUBLIC_ANALYTICS_SRC         the script URL (required to load anything)
 *   NEXT_PUBLIC_ANALYTICS_DOMAIN      Plausible's `data-domain` (your site host)
 *   NEXT_PUBLIC_ANALYTICS_WEBSITE_ID  Umami's `data-website-id` (optional)
 *
 * If `NEXT_PUBLIC_ANALYTICS_SRC` is unset, this renders nothing — no script,
 * no requests, no breakage. It's compatible with Plausible and Umami, both of
 * which are cookieless, so no consent banner is required. See `lib/analytics.ts`
 * for the matching `trackEvent` helper used by the affiliate CTAs.
 */
export default function Analytics() {
  const src = process.env.NEXT_PUBLIC_ANALYTICS_SRC;
  if (!src) return null;

  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  const websiteId = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

  return (
    <Script
      src={src}
      strategy="afterInteractive"
      data-domain={domain}
      data-website-id={websiteId}
    />
  );
}
