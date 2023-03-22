import React, { FC } from 'react';
import QuestionCard from '../../../../entities/QuestionCard';
import MainContentFrame from '../../MainContentFrame';

const MainBlockQuestions: FC = () => {
  return (
    <MainContentFrame
      name="blockQuestions"
      url="blocks/default"
      ItemCard={QuestionCard}
    />
  );
};

export default MainBlockQuestions;
