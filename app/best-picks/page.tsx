import type { Metadata } from "next";
import Link from "next/link";
import BestPicksFilter, {
  type FilterCategory,
} from "@/components/BestPicksFilter";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConfidenceStrip from "@/components/ConfidenceStrip";
import {
  AIR_FRYER_GUIDE_SLUG,
  getProductsByCategory,
  PRICE_CHECKED,
} from "@/lib/products";
import { CATEGORIES, SITE_URL } from "@/lib/site";

const TITLE = "Best picks";
const DESCRIPTION =
  "Our current best picks for small-space living, filtered by category. Only products we've actually researched and compared — no padding, no invented deals.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/best-picks" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/best-picks`,
  },
};

export default function BestPicksPage() {
  // Product categories only — Deals has its own page, not a product grid.
  const categories: FilterCategory[] = CATEGORIES.filter(
    (category) => category.slug !== "deals",
  ).map((category) => ({
    slug: category.slug,
    name: category.name,
    products: getProductsByCategory(category.slug),
  }));

  return (
    <article className="page">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best picks" }]} />

        <h1>{TITLE}</h1>
        <p>{DESCRIPTION}</p>

        <ConfidenceStrip />

        <BestPicksFilter
          categories={categories}
          guideSlug={AIR_FRYER_GUIDE_SLUG}
        />

        <p className="price-note">
          Prices are approximate and were last checked {PRICE_CHECKED}.
          &ldquo;Check price&rdquo; opens the retailer for the current price. We
          don&rsquo;t test or score products, so there are no star ratings — the
          badge is an editorial &ldquo;best for&rdquo; label.
        </p>

        <p>
          Prefer a table? <Link href="/compare">Compare every pick side by side</Link>.
        </p>
      </div>
    </article>
  );
}
