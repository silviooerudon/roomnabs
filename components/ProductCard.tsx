import Link from "next/link";
import Badge from "@/components/Badge";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { PickView } from "@/lib/products";

/**
 * A single product pick card, rendered from the shared `PickView` so the same
 * card works for air fryers and robot vacuums (and anything we add later).
 *
 * No star rating or review count — the editorial `badge` ("Best overall") sits
 * where a rating would on a typical review site. The "Check price" CTA routes
 * through the /go/[linkId] redirect (rel="sponsored nofollow"). When the guide
 * hasn't confirmed a price we show "Check price" rather than invent a number.
 *
 * The product photo is shown when `pick.image` is set, otherwise an on-brand
 * illustration. The name links to the product's own page when it has one,
 * otherwise back to the source guide — so there are never dead-end links.
 */
export default function ProductCard({ pick }: { pick: PickView }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <ImagePlaceholder src={pick.image} alt={pick.imageAlt} label="Product" />
        <span className="product-card__badge">
          <Badge>{pick.badge}</Badge>
        </span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">
          <Link href={pick.href}>{pick.name}</Link>
        </h3>

        <dl className="product-card__specs">
          <div className="spec">
            <dt>{pick.spec.label}</dt>
            <dd>{pick.spec.value}</dd>
          </div>
          <div className="spec">
            <dt>Approx. price</dt>
            <dd>{pick.price ?? "Check price"}</dd>
          </div>
        </dl>

        <a
          className="btn btn--primary btn--block product-card__cta"
          href={`/go/${pick.linkId}`}
          rel="sponsored nofollow"
          target="_blank"
        >
          Check price
        </a>
      </div>
    </article>
  );
}
