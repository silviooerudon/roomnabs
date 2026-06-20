import AffiliateLink from "@/components/AffiliateLink";
import Badge from "@/components/Badge";
import type { Product } from "@/lib/products";

/**
 * Side-by-side comparison of the picks. Products as rows (scales past a handful)
 * with specs in columns. No ratings/scores by design — the editorial badge
 * stands in for them. Prices the guide hasn't confirmed show "Check price"
 * rather than an invented number. Scrolls horizontally on small screens.
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
      <table>
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
              <th scope="row">
                <span className="compare__name">{product.name}</span>
                <Badge>{product.badge}</Badge>
              </th>
              <td>{product.capacity}</td>
              <td>{product.footprint}</td>
              <td>{product.runCost}</td>
              <td>{product.price ?? "—"}</td>
              <td className="compare__cta">
                <AffiliateLink className="btn btn--primary" linkId={product.linkId}>
                  Check price
                </AffiliateLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
