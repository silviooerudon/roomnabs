import Link from "next/link";
import CategoryTile from "@/components/CategoryTile";
import ComparisonTable from "@/components/ComparisonTable";
import EmailSignup from "@/components/EmailSignup";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductCard from "@/components/ProductCard";
import TrustStrip from "@/components/TrustStrip";
import { AIR_FRYER_GUIDE_SLUG, getFeaturedProducts } from "@/lib/products";
import { CATEGORIES, SITE_NAME } from "@/lib/site";

const HERO_BADGES = ["Researched picks", "Expert comparisons", "Real deals"];

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
            <h1>Smart finds for your home</h1>
            <p className="hero__lede">
              We research, compare, and curate the best home and tech products
              so you can buy with confidence — chosen on specs, fit and value,
              with every affiliate link clearly disclosed.
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

      {/* Featured picks — real guide products */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <h2 className="section__title">Featured Picks</h2>
              <p className="section__intro">
                Our current picks, chosen on footprint, running cost and value —
                researched and compared, never guessed.
              </p>
            </div>
            <Link className="link-more" href="/best-picks">
              View all picks →
            </Link>
          </div>

          <div className="product-grid product-grid--featured">
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

      {/* Top picks table beside Shop by category */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="section__head">
              <div>
                <h2 className="section__title">Top Picks This Week</h2>
                <p className="section__intro">
                  Compared on capacity, footprint and running cost — no star
                  ratings, because we don&rsquo;t test products.
                </p>
              </div>
            </div>
            <ComparisonTable
              products={featured.slice(0, 3)}
              caption="This week's top picks, compared"
            />
          </div>

          <div>
            <div className="section__head">
              <h2 className="section__title">Shop by Category</h2>
              <Link className="link-more" href="/best-picks">
                View all categories →
              </Link>
            </div>
            <div className="cat-grid">
              {CATEGORIES.map((category) => (
                <CategoryTile key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip — shaded band */}
      <section className="section section--alt">
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
              Get the best deals, new guides, and expert picks straight to your
              inbox.
            </p>
          </div>
          <div className="newsletter__form">
            <EmailSignup variant="newsletter" />
            <p className="newsletter__note">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </>
  );
}
