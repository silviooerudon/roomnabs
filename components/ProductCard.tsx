import type { ReactNode } from "react";
import Badge from "./Badge";
import CTAButton from "./CTAButton";
import ProsCons from "./ProsCons";

/** A single scannable spec. `label` is optional (some values are self-describing). */
export type Spec = { label?: string; value: ReactNode };

export type ProductCardProps = {
  /** Product name — also used as the image alt text. */
  name: string;
  /** Short qualifier shown under the name (e.g. "best overall for a small kitchen"). */
  tagline?: string;
  /** Corner badge (e.g. "Best overall"). */
  badge?: string;
  specs: Spec[];
  goodFor: ReactNode;
  notFor: ReactNode;
  /** Small print kept visible on the card (sourcing/availability note). */
  note?: ReactNode;
  /** Link id resolved by /go/[linkId]. */
  linkId: string;
  ctaLabel?: string;
  /** TODO: receber imageUrl da API do afiliado (Fase 3). */
  imageUrl?: string;
  /** Description prose. */
  children?: ReactNode;
};

export default function ProductCard({
  name,
  tagline,
  badge,
  specs,
  goodFor,
  notFor,
  note,
  linkId,
  ctaLabel = "Check price",
  imageUrl,
  children,
}: ProductCardProps) {
  // Alt text is prepared with the product name so it's correct the moment a
  // real photo is wired in (Fase 3).
  const alt = name;

  return (
    <article className="product-card">
      <div className="product-card__media">
        {imageUrl ? (
          // TODO: receber imageUrl da API do afiliado (Fase 3).
          // eslint-disable-next-line @next/next/no-img-element
          <img className="product-card__image" src={imageUrl} alt={alt} />
        ) : (
          <div className="product-card__placeholder" role="img" aria-label={alt}>
            <svg
              className="product-card__placeholder-icon"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="3" />
              <circle cx="12" cy="12" r="3.5" />
              <path d="M16.5 7.5h.01" />
            </svg>
            <span className="product-card__placeholder-name">{name}</span>
            <span className="product-card__placeholder-hint">Photo coming soon</span>
          </div>
        )}
        {badge ? <Badge className="product-card__badge">{badge}</Badge> : null}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        {tagline ? <p className="product-card__tagline">{tagline}</p> : null}
        {children ? <div className="product-card__desc">{children}</div> : null}

        <ul className="product-card__specs">
          {specs.map((spec, index) => (
            <li
              className={`spec${spec.label ? "" : " spec--full"}`}
              key={index}
            >
              {spec.label ? (
                <span className="spec__label">{spec.label}</span>
              ) : null}
              <span className="spec__value">{spec.value}</span>
            </li>
          ))}
        </ul>

        <ProsCons good={goodFor} bad={notFor} />

        {note ? <p className="product-card__note">{note}</p> : null}

        <div className="product-card__cta">
          <CTAButton linkId={linkId} ariaLabel={`${ctaLabel} for ${name}`}>
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
