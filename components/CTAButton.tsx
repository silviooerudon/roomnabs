import type { ReactNode } from "react";

/**
 * Strong, accent-coloured purchase button. It is a link to the internal
 * `/go/[linkId]` redirect (a 302 to the retailer) but is styled and sized as a
 * primary button — not a text link. Rendered with rel="sponsored nofollow" and
 * opened in a new tab.
 *
 * Pass `ariaLabel` to give screen-reader users context when several "Check
 * price" buttons appear on the same page.
 */
export default function CTAButton({
  linkId,
  children = "Check price",
  ariaLabel,
  className,
}: {
  linkId: string;
  children?: ReactNode;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <a
      className={`cta-button${className ? ` ${className}` : ""}`}
      href={`/go/${linkId}`}
      rel="sponsored nofollow"
      target="_blank"
      aria-label={ariaLabel}
    >
      <span className="cta-button__label">{children}</span>
      <svg
        className="cta-button__icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </a>
  );
}
