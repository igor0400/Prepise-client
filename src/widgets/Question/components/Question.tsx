import React, { FC } from 'react';
import { QuestionType } from '../../../entities/Question';
import ChangeQuestionModal from '../../forms/ChangeQuestionModal';
import ItemPageFrame from '../../ItemPageFrame';

const Question: FC<QuestionType> = (item) => {
  const { id, type } = item;

  return (
    <ItemPageFrame
      item={item}
      changeBtn={<ChangeQuestionModal itemId={id} />}
      favouriteSettings={{
        storeName:
          type === 'default' ? 'favouriteQuestions' : 'favouriteTestQuestions',
        dataUrl: 'favourites/questions/:id',
      }}
      url="questions"
    />
  );
};

export default Question;
