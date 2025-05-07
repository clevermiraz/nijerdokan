interface Props {
  params: Promise<{ category: string; subcategory: string }>;
}

export default async function SubCategoryPage({ params }: Props) {
  const { category, subcategory } = await params;

  return (
    <div>
      Sub CategoryPage {category} - {subcategory}
    </div>
  );
}
