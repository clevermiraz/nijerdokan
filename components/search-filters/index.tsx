"use client";

import Categories from "@/components/search-filters/Categories";
import SearchInput from "@/components/search-filters/SearchInput";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import BreadcrumbNavigation from "./BreadcrumbNavigation";

export default function SearchFilters() {
  const params = useParams<{ category: string; subcategory: string }>();

  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const activeCategoryData = data.find((category) => category.slug === activeCategory);

  const default_bg_color = "#f5f5f5";

  const activeCategoryColor = activeCategoryData?.color || default_bg_color;
  const activeCategoryName = activeCategoryData?.name || null;

  const activeSubCategoy = params.subcategory as string | undefined;
  const activeSubCategoyName =
    activeCategoryData?.subcategories.find((subcategory) => subcategory.slug === activeSubCategoy)
      ?.name || null;

  return (
    <div
      className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"
      style={{ backgroundColor: activeCategoryColor }}
    >
      <SearchInput />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
      <BreadcrumbNavigation
        activeCategory={activeCategory}
        activeCategoryName={activeCategoryName}
        activeSubCategoyName={activeSubCategoyName}
      />
    </div>
  );
}

export const SearchFiltersSkeleton = () => {
  return (
    <div
      className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <SearchInput disabled />
      <div className="hidden lg:block">
        <div className="h-11" />
      </div>
    </div>
  );
};
