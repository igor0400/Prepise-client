import type { NextPage } from 'next';
import { QuestionType } from '../../entities/Question';
import { PageWrapper } from '../../shared';
import { useGetInfoById } from '../../shared/lib/hooks/useGetInfoById';
import PageLoader from '../../widgets/PageLoader';
import Question from '../../widgets/Question';

const TestPage: NextPage = () => {
  const { data, loading } = useGetInfoById<QuestionType>('questions/test');

  return (
    <PageLoader
      loading={loading}
      data={data}
      loadingTitle="Ищем тест..."
      notFoundTitle="Тест не найден"
      notFoundText="Тест не найден"
    >
      <PageWrapper title={data?.title} description={data?.title}>
        {data && <Question {...data} />}
      </PageWrapper>
    </PageLoader>
  );
};

export default TestPage;
