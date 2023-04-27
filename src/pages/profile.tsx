import type { NextPage } from 'next';
import WithAuthWrapper from '../entities/WithAuthWrapper';
import { PageWrapper } from '../shared';

const Home: NextPage = () => {
  return (
    <PageWrapper title="Профиль">
      <WithAuthWrapper>profile</WithAuthWrapper>
    </PageWrapper>
  );
};

export default Home;
