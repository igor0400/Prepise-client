import React, { FC } from 'react';
import { QuestionType } from '../../../entities/Question';
import ChangeQuestionModal from '../../forms/ChangeQuestionModal';
import ItemPageFrame from '../../ItemPageFrame';

const Question: FC<QuestionType> = (item) => {
  return (
    <ItemPageFrame
      item={item}
      changeBtn={<ChangeQuestionModal itemId={item.id} />}
      favouriteSettings={{
        storeName: 'favouriteQuestions',
        dataUrl: 'favourites/questions/:id',
      }}
      url="questions"
    />
  );
};

export default Question;
