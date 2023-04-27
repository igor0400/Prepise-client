import type { NextPage } from 'next';
import { UserType } from '../../entities/User';
import { PageWrapper } from '../../shared';
import { useGetInfoById } from '../../shared/lib/hooks/useGetInfoById';
import PageLoader from '../../widgets/PageLoader';
import UserPageFrame from '../../widgets/UserPage';

const UserPage: NextPage = () => {
  const { data, loading } = useGetInfoById<UserType>('users');

  return (
    <PageLoader
      loading={loading}
      data={data}
      loadingTitle="Ищем пользователя..."
      notFoundTitle="Пользователь не найден"
      notFoundText="Пользователь не найден"
    >
      <PageWrapper title={data?.name} description={data?.name}>
        {data && <UserPageFrame {...data} />}
      </PageWrapper>
    </PageLoader>
  );
};

export default UserPage;
