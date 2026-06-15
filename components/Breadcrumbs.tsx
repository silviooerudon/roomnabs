import Link from "next/link";

export type Crumb = {
  label: string;
  /** Omit on the final (current) crumb. */
  href?: string;
};

/**
 * Reusable breadcrumb trail. The last item is rendered as the current page
 * (`aria-current="page"`) and is never a link. Markup matches the `.breadcrumbs`
 * styles already in globals.css.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.label}-${index}`}
              {...(isLast ? { "aria-current": "page" as const } : {})}
            >
              {item.href && !isLast ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                item.label
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
