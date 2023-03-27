import type { NextPage } from 'next';
import { QuestionType } from '../../entities/Question';
import { api, PageWrapper } from '../../shared';
import { NotFound } from '../../shared';
import Question from '../../widgets/Question';

interface Props {
  data: QuestionType | undefined;
}

export const getServerSideProps = async (context: any) => {
  try {
    const data = await api.get(`questions/${context.params.id}`).json();
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

const QuestionPage: NextPage<Props> = ({ data }) => {
  if (!data) {
    return (
      <PageWrapper title="Prepise » Вопрос не найден">
        <NotFound>Вопрос не найден</NotFound>
      </PageWrapper>
    );
  }

  const { title } = data;

  return (
    <PageWrapper title={`Prepise » ${title}`} description={title}>
      <Question {...data} />
    </PageWrapper>
  );
};

export default QuestionPage;
