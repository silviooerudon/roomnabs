import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import CheckPrice from "@/components/CheckPrice";
import ConfidenceStrip from "@/components/ConfidenceStrip";
import EmailSignup from "@/components/EmailSignup";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProsCons from "@/components/ProsCons";
import {
  AIR_FRYER_GUIDE_SLUG,
  getProductById,
  getProductsWithDetails,
  PRICE_CHECKED,
} from "@/lib/products";
import { findCategory, SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

// Only products with a real `details` block get a page; any other slug 404s, so
// we never ship thin product pages and they stay out of the sitemap.
export const dynamicParams = false;

export function generateStaticParams() {
  return getProductsWithDetails().map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);

  if (!product?.details) {
    return { title: "Product not found", robots: { index: false, follow: false } };
  }

  const canonical = `/product/${product.id}`;
  return {
    title: product.name,
    description: product.details.tagline,
    alternates: { canonical },
    openGraph: {
      title: product.name,
      description: product.details.tagline,
      url: `${SITE_URL}${canonical}`,
      siteName: SITE_NAME,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductById(slug);

  // Guard the dynamic segment: no details means no real page.
  if (!product?.details) {
    notFound();
  }

  const { details } = product;
  const category = findCategory(product.category);

  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    ...(category ? [{ label: category.name, href: `/${category.slug}` }] : []),
    { label: product.name },
  ];

  // schema.org Product — only fields we can back with real data. No
  // aggregateRating / review: we don't test or score products.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: details.tagline,
    category: category?.name,
  };

  return (
    <article className="page">
      <div className="container">
        <Breadcrumbs items={crumbs} />

        <div className="product-page">
          <div className="product-page__media">
            <ImagePlaceholder alt={product.imageAlt} label="Product" />
          </div>

          <div className="product-page__main">
            <Badge>{product.badge}</Badge>
            <h1>{product.name}</h1>
            <p className="product-page__tagline">{details.tagline}</p>

            <dl className="product-page__specs">
              <div className="spec">
                <dt>Capacity</dt>
                <dd>{product.capacity}</dd>
              </div>
              <div className="spec">
                <dt>Footprint</dt>
                <dd>{product.footprint}</dd>
              </div>
              <div className="spec">
                <dt>Height</dt>
                <dd>{product.height}</dd>
              </div>
              <div className="spec">
                <dt>~Run cost</dt>
                <dd>{product.runCost}</dd>
              </div>
            </dl>

            <p className="product-page__price">
              {product.price ? (
                <>
                  <strong>{product.price}</strong>{" "}
                  <span className="product-page__price-note">
                    approx., checked {PRICE_CHECKED}
                  </span>
                </>
              ) : (
                <span className="product-page__price-note">
                  No confirmed price — check the retailer for the current figure.
                </span>
              )}
            </p>

            <CheckPrice linkId={product.linkId} retailer={product.retailer} />
          </div>
        </div>

        <div className="product-page__body">
          <section>
            <h2>Why it&rsquo;s our &ldquo;{product.badge.toLowerCase()}&rdquo; pick</h2>
            {details.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <ProsCons pros={details.pros} cons={details.cons} />

          <section>
            <h2>Who it&rsquo;s for</h2>
            <p>{details.bestFor}</p>
          </section>

          <ConfidenceStrip />

          <p>
            Compared with the others in its category? See the{" "}
            <Link href="/compare">full comparison</Link>, the rest of our{" "}
            <Link href="/best-picks">best picks</Link>, or the reasoning in the{" "}
            <Link href={`/guide/${AIR_FRYER_GUIDE_SLUG}`}>
              small-kitchen air fryer guide
            </Link>
            .
          </p>

          <EmailSignup
            variant="inline"
            magnet="The Small-Kitchen Buying Checklist"
          />
        </div>
      </div>

      <script
        type="application/ld+json"
        // Static, server-rendered structured data — not user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </article>
  );
}
