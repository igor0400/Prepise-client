import type { NextPage } from 'next';
import MainNavBar from '../widgets/MainNavBar';
import { PageWrapper } from '../shared';

const Home: NextPage = () => {
  return (
    <PageWrapper nopadding>
      <MainNavBar />
    </PageWrapper>
  );
};

export default Home;
