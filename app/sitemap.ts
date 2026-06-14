import type { MetadataRoute } from "next";
import { CATEGORIES, LEGAL_PAGES, SITE_URL } from "@/lib/site";

// Next.js App Router serves this at /sitemap.xml automatically.
// The /go/[linkId] routes are intentionally excluded: they are noindex
// server-side redirects, not indexable content.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...CATEGORIES.map((category) => ({
      url: `${SITE_URL}/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...LEGAL_PAGES.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
