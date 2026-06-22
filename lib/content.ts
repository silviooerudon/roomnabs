/**
 * Cross-cutting "does this have real content yet?" checks.
 *
 * Pages with no real content yet (empty categories, the Deals page, products
 * without a detail page) must be kept out of the sitemap and rendered
 * `noindex` — exactly like a draft guide. These helpers are the single source
 * of truth both the sitemap and the page-level metadata read from, so the two
 * never drift apart.
 *
 * Server-only: this reaches the filesystem via the guides loader.
 */
import type { Metadata } from "next";
import { getGuidesByCategory } from "./guides";
import { getCategoryPicks } from "./products";
import { findCategory } from "./site";

/**
 * A category is "real" once it has at least one published guide or product.
 * Empty categories still render (with an honest "coming soon" state) but are
 * noindex and excluded from the sitemap.
 */
export function categoryHasContent(slug: string): boolean {
  return (
    getCategoryPicks(slug).length > 0 || getGuidesByCategory(slug).length > 0
  );
}

/**
 * Shared page metadata for a category route. Empty categories are marked
 * `noindex` so they aren't indexed while they have nothing real to show; the
 * sitemap leaves them out using the same `categoryHasContent` check.
 */
export function categoryMetadata(slug: string): Metadata {
  const category = findCategory(slug);
  return {
    title: category?.name,
    description: category?.description,
    ...(categoryHasContent(slug)
      ? {}
      : { robots: { index: false, follow: false } }),
  };
}
