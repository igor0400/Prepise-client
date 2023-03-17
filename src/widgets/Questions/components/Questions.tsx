import { Fade } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { QuestionCard, QuestionType } from '../../../entities/Question';
import { CenteredLoader, useRequest } from '../../../shared';
import { getQuestions } from '../lib/api/getQuestions';

const Questions: FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const { request, loading } = useRequest(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await request(getQuestions);
    setQuestions((state) => state.concat(data));
    console.log(data);
  }

  if (loading) return <CenteredLoader className="pb-20" />;

  if (!questions?.length) return <>Список вопросов пуст</>;

  return (
    <Fade
      in={true}
      className="grid gap-4 w-full"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
    >
      {questions.map((item, i) => (
        <QuestionCard {...item} key={i} />
      ))}
    </Fade>
  );
};

export default Questions;
