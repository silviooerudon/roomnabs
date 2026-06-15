import type { ReactNode } from "react";

type TrustItem = { title: string; text: string; icon: ReactNode };

const iconProps = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  width: 22,
  height: 22,
};

/**
 * Honest trust signals — no "we test / hands-on / trusted reviews" claims.
 * We research and compare, we don't test products, and affiliate links are
 * always labelled.
 */
const ITEMS: TrustItem[] = [
  {
    title: "Why we picked it",
    text: "Researched, not guessed — choices explained on specs and fit.",
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Best value",
    text: "Fair picks for tight budgets, not just the priciest option.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v18" />
        <path d="M16.5 7.5c0-1.7-1.8-3-4-3s-4 1.1-4 2.8c0 4 8 2.2 8 6.2 0 1.7-1.8 3-4.2 3s-4.3-1.3-4.3-3.2" />
      </svg>
    ),
  },
  {
    title: "Built for small spaces",
    text: "Footprint and fit come first — picked for real, small rooms.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h6" />
      </svg>
    ),
  },
  {
    title: "Clearly disclosed",
    text: "Affiliate links, always labelled — see our disclosure.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12h6" />
        <path d="M10 9a3 3 0 0 0 0 6m4-6a3 3 0 0 1 0 6" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <ul className="trust">
      {ITEMS.map((item) => (
        <li key={item.title} className="trust__item">
          <span className="trust__icon">{item.icon}</span>
          <div>
            <h3 className="trust__title">{item.title}</h3>
            <p className="trust__text">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
