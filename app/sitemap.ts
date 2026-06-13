import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
  ];
}
