import { Fade } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { QuestionType } from '../../../entities/Question';
import FavouriteIconBtn from '../../../features/FavouriteIconBtn';
import { CenteredLoader, useRequest } from '../../../shared';
import { getQuestions } from '../lib/api/getQuestions';
import QuestionCard from '../../../entities/QuestionCard';
import { Store } from '../../MainQuestions';

interface Props {
  filters: Store;
}

const Questions: FC<Props> = ({ filters }) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const { request, loading } = useRequest(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await request(getQuestions);
    if (data) {
      setQuestions((state) => state.concat(data));
    }
  }

  if (loading) return <CenteredLoader className="pb-20" />;

  if (!questions?.length) return <>Список вопросов пуст</>;

  return (
    <Fade
      in={true}
      className="grid gap-4 w-full auto-rows-min"
      style={{ gridTemplateColumns: 'repeat(auto-fit, 400px)' }}
    >
      {questions.map((item, i) => (
        <QuestionCard
          {...item}
          favouriteBtn={<FavouriteIconBtn {...item} />}
          activeTags={filters.tags}
          key={i}
        />
      ))}
    </Fade>
  );
};

export default Questions;
