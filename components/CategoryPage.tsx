import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { getGuidesByCategory } from "@/lib/guides";
import { AIR_FRYER_GUIDE_SLUG, getProductsByCategory, PRICE_CHECKED } from "@/lib/products";
import { findCategory } from "@/lib/site";
import { notFound } from "next/navigation";

/**
 * Shared layout for category pages.
 *
 * Categories with real products render a card grid; once published guides exist
 * they list those too. A category with neither shows an honest "coming soon"
 * empty state (and is set `noindex` + kept out of the sitemap by its page-level
 * metadata) — we never pad an empty category with fake products.
 */
export default function CategoryPage({ slug }: { slug: string }) {
  const category = findCategory(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);
  const guides = getGuidesByCategory(slug);
  const hasContent = products.length > 0 || guides.length > 0;

  return (
    <article className="page">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />

        <h1>{category.name}</h1>
        <p>{category.description}</p>

        {products.length > 0 ? (
          <>
            <div className="section__head">
              <h2>Our picks</h2>
              <Link className="link-more" href="/compare">
                Compare side by side →
              </Link>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  guideSlug={AIR_FRYER_GUIDE_SLUG}
                />
              ))}
            </div>
            <p className="price-note">
              Prices are approximate and were last checked {PRICE_CHECKED}.
              &ldquo;Check price&rdquo; opens the retailer for the current price.
            </p>
          </>
        ) : null}

        {guides.length > 0 ? (
          <>
            <h2>Guides</h2>
            <ul>
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/guide/${guide.slug}`}>
                    {guide.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {!hasContent ? (
          <div className="empty-state">
            <h2>Guides coming soon</h2>
            <p>
              We&rsquo;re still researching and comparing our{" "}
              {category.name.toLowerCase()} picks. When they&rsquo;re ready
              they&rsquo;ll appear here — chosen on specs and space, never padded
              out with products we haven&rsquo;t actually compared.
            </p>
            <p>
              In the meantime,{" "}
              <Link href="/best-picks">browse our current best picks</Link> or{" "}
              <Link href="/">explore the other categories</Link>.
            </p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
