"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

export type FilterCategory = {
  slug: string;
  name: string;
  products: Product[];
};

const ALL = "all";

/**
 * Category filter for the Best Picks grid. Pure client-side state (no
 * localStorage) — selecting a tab just filters the in-memory list. Categories
 * with no products yet show an honest empty state instead of fake placeholders.
 */
export default function BestPicksFilter({
  categories,
  guideSlug,
}: {
  categories: FilterCategory[];
  guideSlug: string;
}) {
  const [active, setActive] = useState<string>(ALL);

  const allProducts = categories.flatMap((category) => category.products);
  const activeCategory = categories.find((category) => category.slug === active);
  const products = active === ALL ? allProducts : activeCategory?.products ?? [];

  const tabs = [{ slug: ALL, name: "All" }, ...categories];

  return (
    <div>
      <div className="bp-tabs" role="tablist" aria-label="Filter picks by category">
        {tabs.map((tab) => {
          const isActive = tab.slug === active;
          return (
            <button
              key={tab.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`bp-tab${isActive ? " bp-tab--active" : ""}`}
              onClick={() => setActive(tab.slug)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      <div role="region" aria-live="polite">
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                guideSlug={guideSlug}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Guides coming soon</h2>
            <p>
              We haven&rsquo;t published{" "}
              {activeCategory ? activeCategory.name.toLowerCase() : "these"}{" "}
              picks yet. When we have, they&rsquo;ll show up here — chosen on
              specs and space, never padded out with products we haven&rsquo;t
              actually compared.
            </p>
            <p>
              For now, <Link href="/best-picks">see all current picks</Link>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
