import { NextPage } from 'next';
import { NotFound, PageWrapper } from '../shared';

const Custom404: NextPage = () => {
  return (
    <PageWrapper title="Prepise » Страница не найдена" nopadding>
      <NotFound>Страница не найдена</NotFound>
    </PageWrapper>
  );
};

export default Custom404;
