/**
 * Neutral light placeholder used wherever a real photo will eventually go.
 *
 * We don't use real product/lifestyle photos yet, so every image slot is one of
 * these: a soft gradient with an optional label. It exposes an accessible
 * description via role="img" + aria-label so screen readers know what's intended.
 *
 * // TODO: replace usages with licensed lifestyle / product imagery.
 */
export default function ImagePlaceholder({
  alt,
  label = "Image",
  fill = false,
  framed = true,
}: {
  alt: string;
  label?: string;
  /** Absolutely fill the parent (for full-bleed hero slots). */
  fill?: boolean;
  /** Draw the rounded ring frame. Off when the parent already clips. */
  framed?: boolean;
}) {
  const classes = [
    "img-ph",
    fill ? "img-ph--fill" : "",
    framed && !fill ? "img-ph--framed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div role="img" aria-label={alt} className={classes}>
      <span className="img-ph__label" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          width="16"
          height="16"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="m4 17 4.5-4.5L13 17l3-3 4 4" />
        </svg>
        {label}
      </span>
    </div>
  );
}
