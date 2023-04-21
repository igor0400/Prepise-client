import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { PageWrapper } from '../../shared';

const CompanyPage: NextPage = () => {
  const router = useRouter();
  const id = router?.query?.id;

  return <PageWrapper title={`Prepise`}>Сомпания с id: {id}</PageWrapper>;
};

export default CompanyPage;
