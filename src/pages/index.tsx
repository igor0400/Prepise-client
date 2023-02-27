import type { NextPage } from 'next';

import { PageWrapper } from '../shared';

import Cards from '../widgets/Cards';
import StartScreen from '../widgets/StartScreen';

const Home: NextPage = () => {
  return (
    <PageWrapper nopadding>
      <StartScreen />
      <Cards />
    </PageWrapper>
  );
};

export default Home;
