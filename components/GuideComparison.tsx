import { GUIDE_QUICK_PICKS } from "@/lib/guide-picks";

/**
 * "Quick picks" comparison table for an MDX guide, using the site's `compare`
 * styling (the same bordered, horizontally-scrolling table used on the home
 * page).
 *
 * The table data is keyed in `lib/guide-picks.ts` and referenced by a string
 * `table` id, because next-mdx-remote only passes string attributes to MDX
 * components (array/expression attributes are dropped). Presentation only — the
 * headers and rows are the guide's existing table data, unchanged.
 */
export default function GuideComparison({
  caption,
  table,
}: {
  caption: string;
  table: string;
}) {
  const data = GUIDE_QUICK_PICKS[table];
  if (!data) return null;
  const { headers, rows } = data;

  return (
    <div className="compare compare--guide">
      <table>
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th key={headers[index]} scope="row">
                    <span className="compare__name">{cell}</span>
                  </th>
                ) : (
                  <td key={headers[index]}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
