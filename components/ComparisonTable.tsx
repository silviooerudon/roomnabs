import type { ReactNode } from "react";

/**
 * Styles a quick-picks comparison table. Wrap a normal Markdown/GFM table as
 * children — the component adds the highlighted header, zebra striping, an
 * emphasised first ("Best for") column and a horizontally scrollable container
 * so the table never breaks the layout on small screens.
 *
 * The scroll container is focusable and labelled so keyboard and screen-reader
 * users can scroll and identify it.
 */
export default function ComparisonTable({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <figure className="comparison-table">
      {caption ? (
        <figcaption className="comparison-table__caption">{caption}</figcaption>
      ) : null}
      <div
        className="comparison-table__scroll"
        role="region"
        aria-label={caption ?? "Comparison table"}
        tabIndex={0}
      >
        {children}
      </div>
    </figure>
  );
}
