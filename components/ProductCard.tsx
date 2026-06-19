import Link from "next/link";
import AffiliateLink from "@/components/AffiliateLink";
import Badge from "@/components/Badge";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { getProductHref, type Product } from "@/lib/products";

/**
 * A single featured product pick.
 *
 * No star rating or review count — the editorial `badge` ("Best overall") sits
 * where a rating would on a typical review site. The "Check price" CTA routes
 * through the /go/[linkId] redirect (rel="sponsored nofollow"). When the guide
 * hasn't confirmed a price we show "Check price" rather than invent a number.
 *
 * The product name links to the product's own page when it has one, otherwise
 * back to the source guide — so there are never dead-end links.
 */
export default function ProductCard({
  product,
  guideSlug,
}: {
  product: Product;
  guideSlug: string;
}) {
  const href = getProductHref(product, guideSlug);
  return (
    <article className="product-card">
      <div className="product-card__media">
        <ImagePlaceholder alt={product.imageAlt} label="Product" />
        <span className="product-card__badge">
          <Badge>{product.badge}</Badge>
        </span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">
          <Link href={href}>{product.name}</Link>
        </h3>

        <dl className="product-card__specs">
          <div className="spec">
            <dt>Footprint</dt>
            <dd>{product.footprint}</dd>
          </div>
          <div className="spec">
            <dt>Approx. price</dt>
            <dd>{product.price ?? "Check price"}</dd>
          </div>
        </dl>

        <AffiliateLink
          className="btn btn--primary btn--block product-card__cta"
          linkId={product.linkId}
        >
          Check price
        </AffiliateLink>
      </div>
    </article>
  );
}
