import type { NextPage } from 'next';
import { UserType } from '../../entities/User';
import { PageWrapper } from '../../shared';
import { useGetInfoById } from '../../shared/lib/hooks/useGetInfoById';
import PageLoader from '../../widgets/PageLoader';
import UserPageFrame from '../../widgets/UserPage';

const CompanyPage: NextPage = () => {
  const { data, loading } = useGetInfoById<UserType>('companies');

  return (
    <PageLoader
      loading={loading}
      data={data}
      loadingTitle="Ищем компанию..."
      notFoundTitle="Компания не найдена"
      notFoundText="Компания не найдена"
    >
      <PageWrapper title={data?.name} description={data?.name}>
        {data && <UserPageFrame {...data} />}
      </PageWrapper>
    </PageLoader>
  );
};

export default CompanyPage;
