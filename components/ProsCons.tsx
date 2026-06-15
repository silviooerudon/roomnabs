/**
 * Honest pros / cons split for a product page. Each point is editorial copy
 * derived from the product's real specs (footprint, capacity, run cost, price)
 * — not a test result or a score. No ratings live here.
 */
export default function ProsCons({
  pros,
  cons,
}: {
  pros: string[];
  cons: string[];
}) {
  return (
    <div className="proscons">
      <section className="proscons__col proscons__col--pros">
        <h3 className="proscons__title">Pros</h3>
        <ul className="proscons__list">
          {pros.map((point) => (
            <li key={point}>
              <span className="proscons__mark" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="proscons__col proscons__col--cons">
        <h3 className="proscons__title">Cons</h3>
        <ul className="proscons__list">
          {cons.map((point) => (
            <li key={point}>
              <span className="proscons__mark" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
