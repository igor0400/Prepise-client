import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { PageWrapper } from '../../shared';

const UserPage: NextPage = () => {
  const router = useRouter();
  const id = router?.query?.id;

  return <PageWrapper title={`Prepise`}>Пользователь с id: {id}</PageWrapper>;
};

export default UserPage;
