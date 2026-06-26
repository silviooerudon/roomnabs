import Badge from "@/components/Badge";
import type { Product } from "@/lib/products";

/**
 * Side-by-side comparison of the picks. Products as rows (scales past a handful)
 * with specs in columns. No ratings/scores by design — the editorial badge
 * stands in for them. Prices the guide hasn't confirmed show "Check price"
 * rather than an invented number.
 *
 * Responsive: on desktop it's a clean table with clear row separation. On small
 * screens the horizontal table is unreadable, so each product collapses into a
 * stacked card — every cell carries its column name (via `data-label`) so the
 * value reads as "label: value" without a wide horizontal scroll.
 */
export default function ComparisonTable({
  products,
  caption,
}: {
  products: Product[];
  caption: string;
}) {
  return (
    <div className="compare">
      <table className="compare__table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Pick</th>
            <th scope="col">Capacity</th>
            <th scope="col">Footprint</th>
            <th scope="col">~Run cost</th>
            <th scope="col">Approx. price</th>
            <th scope="col" className="compare__cta">
              <span className="sr-only">Check price</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row" className="compare__pick">
                <span className="compare__name">{product.name}</span>
                <Badge>{product.badge}</Badge>
              </th>
              <td data-label="Capacity">{product.capacity}</td>
              <td data-label="Footprint">{product.footprint}</td>
              <td data-label="Run cost">{product.runCost}</td>
              <td data-label="Approx. price">
                {product.price ?? "Check price"}
              </td>
              <td className="compare__cta">
                <a
                  className="btn btn--primary"
                  href={`/go/${product.linkId}`}
                  rel="sponsored nofollow"
                  target="_blank"
                >
                  Check price
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
