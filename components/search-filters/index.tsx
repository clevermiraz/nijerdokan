import { CustomCategory } from "@/app/(app)/(home)/types";
import Categories from "@/components/search-filters/Categories";
import SearchInput from "@/components/search-filters/SearchInput";

interface SearchFiltersProps {
  data: CustomCategory[];
}

export default function SearchFilters({ data }: SearchFiltersProps) {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput disable={false} data={data} />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
}
