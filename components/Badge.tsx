import type { ReactNode } from "react";

/**
 * Small reusable accent-coloured seal (e.g. "Best overall", "Best value").
 * Purely presentational; pass the label as children.
 */
export default function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`badge${className ? ` ${className}` : ""}`}>{children}</span>
  );
}
