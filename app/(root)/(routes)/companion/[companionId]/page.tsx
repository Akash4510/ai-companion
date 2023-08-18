import prismadb from '@/lib/prismadb';
import CompanionForm from './components/companion-form';

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  // TODO: Check subscription

  const companion = await prismadb.companion.findUnique({
    where: {
      id: '64df13c79d310227821297c1',
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
