import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { findCategory } from "@/lib/site";

const slug = "deals";

export const metadata: Metadata = {
  title: findCategory(slug)?.name,
  description: findCategory(slug)?.description,
};

export default function Page() {
  return <CategoryPage slug={slug} />;
}
