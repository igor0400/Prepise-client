import type { NextPage } from 'next';
import { QuestionType } from '../../entities/Question';
import { PageWrapper } from '../../shared';
import { useGetInfoById } from '../../shared/lib/hooks/useGetInfoById';
import PageLoader from '../../widgets/PageLoader';
import Question from '../../widgets/Question';

const QuestionPage: NextPage = () => {
  const { data, loading } = useGetInfoById<QuestionType>('questions/default');

  return (
    <PageLoader
      loading={loading}
      data={data}
      loadingTitle="Ищем вопрос..."
      notFoundTitle="Вопрос не найден"
      notFoundText="Вопрос не найден"
    >
      <PageWrapper title={data?.title} description={data?.title}>
        {data && <Question {...data} />}
      </PageWrapper>
    </PageLoader>
  );
};

export default QuestionPage;
