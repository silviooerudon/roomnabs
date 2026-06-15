import type { ReactNode } from "react";

/**
 * Small amber pill used for editorial "best for" labels (e.g. "Best overall").
 * These describe *why we picked something*, NOT a measured rating — we don't
 * test or score products, so there is no star/rating component anywhere.
 */
export default function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
}
