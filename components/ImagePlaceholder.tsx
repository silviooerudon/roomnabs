/**
 * Image slot. Where a real photo will eventually go we now render an on-brand
 * vector illustration chosen from the alt/label text (air fryer, coffee machine,
 * kettle, lamp, or a cosy-room scene for lifestyle slots). When nothing matches
 * we fall back to the neutral labelled gradient so the slot is never empty.
 *
 * // TODO: replace illustrations with licensed lifestyle / product photography.
 */

type Art = { src: string; cover?: boolean };

/** Keyword → illustration. Order matters: most specific first. */
const ART_RULES: { test: RegExp; art: Art }[] = [
  { test: /lifestyle|apartment|\broom\b|interior|living|tidy|cosy|cozy/, art: { src: "/img/hero-room.svg", cover: true } },
  { test: /air ?fry|fryer/, art: { src: "/img/airfryer.svg" } },
  { test: /coffee|espresso|nespresso|vertuo|dedica|barista|magnifica|dolce|pod/, art: { src: "/img/coffee.svg" } },
  { test: /kettle/, art: { src: "/img/kettle.svg" } },
  { test: /\blamp\b|desk light/, art: { src: "/img/lamp.svg" } },
];

function pickArt(text: string): Art | null {
  const t = text.toLowerCase();
  for (const rule of ART_RULES) {
    if (rule.test.test(t)) return rule.art;
  }
  return null;
}

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

  const art = pickArt(`${alt} ${label}`);

  return (
    <div role="img" aria-label={alt} className={classes}>
      {art ? (
        <img
          src={art.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`img-ph__art${art.cover ? " img-ph__art--cover" : ""}`}
        />
      ) : (
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
      )}
    </div>
  );
}
