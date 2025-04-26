import { Category } from "@/payload-types";
import CategoryDropdown from "./CategoryDropdown";

interface CategoriesProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function Categories({ data }: CategoriesProps) {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category: Category) => (
          <div key={category.id}>
            <CategoryDropdown category={category} isActive={false} isNavigationHovered={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
