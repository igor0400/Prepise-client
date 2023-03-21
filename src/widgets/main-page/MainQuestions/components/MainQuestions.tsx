import { FC } from 'react';
import QuestionCard from '../../../../entities/QuestionCard';
import MainContentFrame from '../../MainContentFrame';

const MainQuestions: FC = () => {
  return <MainContentFrame name="questions" url="questions/default" ItemCard={QuestionCard} />;
};

export default MainQuestions;
