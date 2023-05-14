import type { NextPage } from 'next';
import WithAuthWrapper from '../entities/WithAuthWrapper';
import { PageWrapper } from '../shared';
import Profile from '../widgets/Profile';

const Home: NextPage = () => {
  return (
    <PageWrapper title="Профиль">
      <WithAuthWrapper>
        <Profile />
      </WithAuthWrapper>
    </PageWrapper>
  );
};

export default Home;
