import SearchInput from '@/components/search-input';
import Categories from '@/components/categories';
import prismadb from '@/lib/prismadb';

const RootPage = async () => {
  const categories = await prismadb.categories.findMany();
  console.log(categories);

  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
    </div>
  );
};

export default RootPage;
