import type { ReactNode } from "react";

/**
 * Wrapper for a run of `GuideProductCard`s in an MDX guide. A real component
 * (rather than a raw <div> in the MDX) so MDX parses the nested cards as JSX and
 * passes their props through. Lays the cards out down the guide's reading column.
 */
export default function GuideCards({ children }: { children?: ReactNode }) {
  return <div className="guide-cards">{children}</div>;
}
