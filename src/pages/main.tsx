import type { NextPage } from 'next';
import MainNavBar from '../widgets/main-page/MainNavBar';
import { PageWrapper } from '../shared';
import MainContent from '../widgets/main-page/MainContent';

const Home: NextPage = () => {
  return (
    <PageWrapper nopadding>
      <section className="flex">
        <MainNavBar />
        <div className="flex p-10 w-full">
          <MainContent />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
