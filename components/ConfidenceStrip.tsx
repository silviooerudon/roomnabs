/**
 * The honest "confidence strip" reused across template pages. It deliberately
 * stands in for the dishonest signals review sites usually show (star averages,
 * "we tested", subscriber counts): every line here is something we can actually
 * stand behind.
 */
const ITEMS = [
  "Researched & compared",
  "Chosen on specs & space",
  "Honest picks, clearly disclosed",
  "Updated regularly",
];

function Tick() {
  return (
    <span className="confidence__tick" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="13"
        height="13"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function ConfidenceStrip() {
  return (
    <ul className="confidence">
      {ITEMS.map((item) => (
        <li key={item} className="confidence__item">
          <Tick />
          {item}
        </li>
      ))}
    </ul>
  );
}
