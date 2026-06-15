import type { MetadataRoute } from "next";
import { categoryHasContent } from "@/lib/content";
import { getPublishedGuides } from "@/lib/guides";
import { getProductsWithDetails } from "@/lib/products";
import { CATEGORIES, LEGAL_PAGES, SITE_URL } from "@/lib/site";

// Next.js App Router serves this at /sitemap.xml automatically.
//
// Anything without real content yet is intentionally excluded so it stays out
// of the index (matching its page-level `noindex`):
//   - empty categories and the Deals page (no products/guides yet)
//   - the /go/[linkId] redirects (noindex 302s)
//   - draft guides and products without a detail page
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/best-picks`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/compare`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Only categories that actually have content yet.
    ...CATEGORIES.filter((category) => categoryHasContent(category.slug)).map(
      (category) => ({
        url: `${SITE_URL}/${category.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }),
    ),
    // Only products with a real detail page.
    ...getProductsWithDetails().map((product) => ({
      url: `${SITE_URL}/product/${product.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getPublishedGuides().map((guide) => ({
      url: `${SITE_URL}/guide/${guide.slug}`,
      lastModified: guide.frontmatter.updated
        ? new Date(guide.frontmatter.updated)
        : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...LEGAL_PAGES.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
