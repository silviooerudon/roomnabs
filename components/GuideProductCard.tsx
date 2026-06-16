import type { ReactNode } from "react";
import Badge from "@/components/Badge";
import GuideProsCons from "@/components/GuideProsCons";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { GUIDE_SPECS } from "@/lib/guide-picks";

/**
 * A guide product block rendered as a styled card, matching the site's design
 * system (the same `product-card`, `img-ph`, `badge`, `spec` and `btn--primary`
 * classes used on the home page). Built for MDX guides: the description prose is
 * passed as children; the scalar copy (name / badge / good-for / not-for / note)
 * as string attributes.
 *
 * The specs array is keyed by `linkId` in `lib/guide-picks.ts` (next-mdx-remote
 * can't pass array attributes through MDX). This is presentation only — every
 * value is the guide's own text. Prices the guide hasn't confirmed (e.g.
 * "[POD COST: verify]") are shown verbatim, and the "Check price" CTA routes
 * through /go/[linkId] (rel="sponsored nofollow").
 */
export default function GuideProductCard({
  name,
  badge,
  imageAlt,
  goodFor,
  notFor,
  note,
  linkId,
  children,
}: {
  name: string;
  badge: string;
  imageAlt: string;
  goodFor: string;
  notFor: string;
  note?: string;
  linkId: string;
  children?: ReactNode;
}) {
  const specs = GUIDE_SPECS[linkId] ?? [];

  return (
    <article className="product-card product-card--guide">
      <div className="product-card__media">
        <ImagePlaceholder alt={imageAlt} label="Product" />
        <span className="product-card__badge">
          <Badge>{badge}</Badge>
        </span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>

        {children ? <div className="product-card__lede">{children}</div> : null}

        <dl className="product-card__specs product-card__specs--guide">
          {specs.map((spec) => (
            <div
              className={spec.label ? "spec" : "spec spec--value-only"}
              key={spec.label ?? spec.value}
            >
              {spec.label ? <dt>{spec.label}</dt> : null}
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>

        <GuideProsCons goodFor={goodFor} notFor={notFor} />

        {note ? (
          <p className="product-card__note">
            <em>{note}</em>
          </p>
        ) : null}

        <a
          className="btn btn--primary product-card__cta"
          href={`/go/${linkId}`}
          rel="sponsored nofollow"
          target="_blank"
        >
          Check price
        </a>
      </div>
    </article>
  );
}
