import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComparisonTable from "@/components/ComparisonTable";
import ConfidenceStrip from "@/components/ConfidenceStrip";
import {
  AIR_FRYER_GUIDE_SLUG,
  getAllProducts,
  PRICE_CHECKED,
} from "@/lib/products";
import { SITE_URL } from "@/lib/site";

const TITLE = "Compare air fryers for small kitchens";
const DESCRIPTION =
  "Every air fryer we've researched, side by side on the specs that matter in a small kitchen: capacity, worktop footprint, running cost in euros and price.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/compare" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/compare`,
  },
};

export default function ComparePage() {
  const products = getAllProducts();

  return (
    <article className="page">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Compare" }]} />

        <h1>{TITLE}</h1>
        <p>{DESCRIPTION}</p>

        <ConfidenceStrip />

        <div className="compare-wrap">
          <ComparisonTable
            products={products}
            caption="Air fryers compared on capacity, footprint, running cost and price"
          />
        </div>

        <p className="price-note">
          We don&rsquo;t test products or score them, so there are no star
          ratings here — the badge is an editorial &ldquo;best for&rdquo; label.
          Prices are approximate and were last checked {PRICE_CHECKED}; a dash
          means we couldn&rsquo;t confirm one, so use &ldquo;Check price&rdquo;
          for the live figure.
        </p>

        <p>
          Want the reasoning behind each pick? Read the full{" "}
          <Link href={`/guide/${AIR_FRYER_GUIDE_SLUG}`}>
            small-kitchen air fryer guide
          </Link>{" "}
          or see them as cards on{" "}
          <Link href="/best-picks">best picks</Link>.
        </p>
      </div>
    </article>
  );
}
