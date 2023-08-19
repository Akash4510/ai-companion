import { redirect } from 'next/navigation';
import { auth, redirectToSignIn } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';
import CompanionForm from './components/companion-form';
import { checkSubscription } from '@/lib/subscription';

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  const { userId } = auth();
  if (!userId) {
    return redirectToSignIn();
  }

  const validSubscription = await checkSubscription();
  if (!validSubscription) {
    return redirect('/');
  }

  let companion = null;

  if (params.companionId !== 'new') {
    companion = await prismadb.companion.findUnique({
      where: {
        id: params.companionId,
        userId,
      },
    });
  }

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
