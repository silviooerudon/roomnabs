import type { ReactNode } from "react";

/**
 * Two-column "Good for / Not for" block: pros in green, cons in red, each with
 * a simple inline icon. Labels default to the wording used in the guides.
 */
export default function ProsCons({
  good,
  bad,
  goodLabel = "Good for",
  badLabel = "Not for",
}: {
  good: ReactNode;
  bad: ReactNode;
  goodLabel?: string;
  badLabel?: string;
}) {
  return (
    <div className="pros-cons">
      <div className="pros-cons__col pros-cons__col--pro">
        <p className="pros-cons__head">
          <svg
            className="pros-cons__icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          {goodLabel}
        </p>
        <p className="pros-cons__text">{good}</p>
      </div>
      <div className="pros-cons__col pros-cons__col--con">
        <p className="pros-cons__head">
          <svg
            className="pros-cons__icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          {badLabel}
        </p>
        <p className="pros-cons__text">{bad}</p>
      </div>
    </div>
  );
}
