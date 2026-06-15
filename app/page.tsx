import Link from "next/link";
import CategoryTile from "@/components/CategoryTile";
import ComparisonTable from "@/components/ComparisonTable";
import EmailSignup from "@/components/EmailSignup";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductCard from "@/components/ProductCard";
import TrustStrip from "@/components/TrustStrip";
import { AIR_FRYER_GUIDE_SLUG, getFeaturedProducts } from "@/lib/products";
import { CATEGORIES, SITE_NAME } from "@/lib/site";

const HERO_BADGES = [
  "Researched & compared",
  "Chosen on specs & space",
  "Honest picks, clearly disclosed",
];

function Tick() {
  return (
    <span className="tick" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="14"
        height="14"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero — text left, full-bleed placeholder right */}
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__copy container">
            <p className="eyebrow">Small-space living, sorted</p>
            <h1>Compact home &amp; tech for small flats</h1>
            <p className="hero__lede">
              {SITE_NAME} researches and compares space-savvy products for
              people renting small flats across Ireland and Europe — from
              foldable desks to counter-friendly kitchen gear and smart-home kit
              that landlords won&rsquo;t mind.
            </p>
            <ul className="hero__badges">
              {HERO_BADGES.map((badge) => (
                <li key={badge} className="hero__badge">
                  <Tick />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* // TODO: licensed lifestyle imagery */}
          <div className="hero__media">
            <ImagePlaceholder
              fill
              label="Lifestyle"
              alt="Placeholder for a lifestyle photo of a tidy, compact apartment"
            />
          </div>
        </div>
      </section>

      {/* Featured picks — real air-fryer guide products */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <h2 className="section__title">Featured picks</h2>
              <p className="section__intro">
                Our current picks from the air-fryer guide, chosen on footprint,
                running cost and value — not star ratings.
              </p>
            </div>
            <Link className="link-more" href={`/guide/${AIR_FRYER_GUIDE_SLUG}`}>
              View the full guide →
            </Link>
          </div>

          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                guideSlug={AIR_FRYER_GUIDE_SLUG}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top picks table beside Browse by category */}
      <section className="section section--alt">
        <div className="container split">
          <div>
            <div className="section__head">
              <div>
                <h2 className="section__title">Top picks at a glance</h2>
                <p className="section__intro">
                  Compared on capacity, footprint and running cost. No ratings —
                  we don&rsquo;t test products.
                </p>
              </div>
            </div>
            <ComparisonTable
              products={featured}
              caption="Comparison of picks from the air-fryer guide"
            />
          </div>

          <div>
            <div className="section__head">
              <h2 className="section__title">Shop by category</h2>
            </div>
            <div className="cat-grid">
              {CATEGORIES.map((category) => (
                <CategoryTile key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="section">
        <div className="container">
          <TrustStrip />
        </div>
      </section>

      {/* Newsletter band */}
      <section className="section newsletter">
        <div className="container newsletter__inner">
          <div className="newsletter__copy">
            <h2 className="section__title">Stay in the loop</h2>
            <p className="section__intro">
              New guides and price drops for small-space living, now and then —
              no spam, unsubscribe any time.
            </p>
          </div>
          <div className="newsletter__form">
            <EmailSignup variant="newsletter" />
          </div>
        </div>
      </section>
    </>
  );
}
