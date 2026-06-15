import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Category } from "@/lib/site";

/**
 * Category entry point: placeholder image slot + label. The whole tile is one
 * link for an easy tap target.
 */
export default function CategoryTile({ category }: { category: Category }) {
  return (
    <Link href={`/${category.slug}`} className="cat-tile">
      <ImagePlaceholder
        alt={`Placeholder image for ${category.name}`}
        framed={false}
      />
      <span className="cat-tile__label">
        {category.name}
        <span className="cat-tile__arrow" aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  );
}
