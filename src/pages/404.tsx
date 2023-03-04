import { NextPage } from 'next';
import { PageWrapper } from '../shared';

const Custom404: NextPage = () => {
  return (
    <PageWrapper title="Prepise » 404" nopadding>
      <h3>404 not found</h3>
    </PageWrapper>
  );
};

export default Custom404;
