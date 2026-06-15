import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryMetadata } from "@/lib/content";

const slug = "smart-home";

export const metadata: Metadata = categoryMetadata(slug);

export default function Page() {
  return <CategoryPage slug={slug} />;
}
