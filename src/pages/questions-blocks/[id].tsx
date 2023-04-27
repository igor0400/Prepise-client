import type { NextPage } from 'next';
import { BlockType } from '../../entities/Block';
import { PageWrapper } from '../../shared';
import { useGetInfoById } from '../../shared/lib/hooks/useGetInfoById';
import Block from '../../widgets/Block';
import PageLoader from '../../widgets/PageLoader';

const BlockQuestionsPage: NextPage = () => {
  const { data, loading } = useGetInfoById<BlockType>('blocks/default');

  return (
    <PageLoader
      loading={loading}
      data={data}
      loadingTitle="Ищем блок..."
      notFoundTitle="Блок не найден"
      notFoundText="Блок вопросов не найден"
    >
      <PageWrapper title={data?.title} description={data?.title}>
        {data && <Block {...data} />}
      </PageWrapper>
    </PageLoader>
  );
};

export default BlockQuestionsPage;
