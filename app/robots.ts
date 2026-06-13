import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Next.js App Router serves this at /robots.txt automatically.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Don't crawl the redirect endpoints.
      disallow: "/go/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
