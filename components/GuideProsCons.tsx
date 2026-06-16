/**
 * "Good for / not for" split for a guide product card, using the same visual
 * language as the site's ProsCons (two columns, check / cross marks) but with
 * single-line guide copy and guide-appropriate titles. Presentation only — the
 * text passed in is the guide's existing wording, unchanged.
 */
function CheckMark() {
  return (
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
  );
}

function CrossMark() {
  return (
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
  );
}

export default function GuideProsCons({
  goodFor,
  notFor,
  goodTitle = "Good for",
  badTitle = "Not for",
}: {
  goodFor: string;
  notFor: string;
  goodTitle?: string;
  badTitle?: string;
}) {
  return (
    <div className="proscons proscons--guide">
      <section className="proscons__col proscons__col--pros">
        <h4 className="proscons__title">{goodTitle}</h4>
        <ul className="proscons__list">
          <li>
            <span className="proscons__mark" aria-hidden="true">
              <CheckMark />
            </span>
            {goodFor}
          </li>
        </ul>
      </section>

      <section className="proscons__col proscons__col--cons">
        <h4 className="proscons__title">{badTitle}</h4>
        <ul className="proscons__list">
          <li>
            <span className="proscons__mark" aria-hidden="true">
              <CrossMark />
            </span>
            {notFor}
          </li>
        </ul>
      </section>
    </div>
  );
}
