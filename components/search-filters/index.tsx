import Categories from "@/components/search-filters/Categories";
import SearchInput from "@/components/search-filters/SearchInput";

interface SearchFiltersProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function SearchFilters({ data }: SearchFiltersProps) {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput disable={false} />
      <Categories data={data} />
    </div>
  );
}
