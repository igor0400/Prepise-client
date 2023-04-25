import type { NextPage } from 'next';
import MainNavBar from '../widgets/main-page/MainNavBar';
import { PageWrapper, secureApi } from '../shared';
import MainContent from '../widgets/main-page/MainContent';
import { useEffect } from 'react';

const Home: NextPage = () => {
  // useEffect(() => {
  //   patchData();
  // }, []);

  // async function patchData() {
    // const data = await secureApi().patch('users', {
    //   json: {
    //     tags: ['1', '2'],
    //   },
    // });
    // console.log(data);
  // }

  return (
    <PageWrapper nopadding>
      <section className="flex">
        <MainNavBar />
        <MainContent />
      </section>
    </PageWrapper>
  );
};

export default Home;
