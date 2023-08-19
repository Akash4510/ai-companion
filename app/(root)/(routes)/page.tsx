import prismadb from '@/lib/prismadb';
import SearchInput from '@/components/search-input';
import Categories from '@/components/categories';
import Companinos from '@/components/companions';

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        contains: searchParams.name,
        mode: 'insensitive',
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  const categories = await prismadb.category.findMany();

  return (
    <div className="h-full p-4 space-y-4">
      <div className="space-y-2">
        <SearchInput />
        <Categories data={categories} />
      </div>
      <Companinos data={data} />
    </div>
  );
};

export default RootPage;
