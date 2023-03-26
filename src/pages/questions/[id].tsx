import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { PageWrapper } from '../../shared';


const QuestionPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PageWrapper title="Prepise » Профиль">Вопрос {id}</PageWrapper>;
};

export default QuestionPage;
