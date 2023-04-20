import React, { FC } from 'react';
import { QuestionType } from '../../../entities/Question';
import ChangeQuestionModal from '../../forms/ChangeQuestionModal';
import ItemPageFrame from '../../ItemPageFrame';

const Question: FC<QuestionType> = (item) => {
  const { id, type } = item;

  const isDefault = type === 'default';
  const storeName = isDefault ? 'favouriteQuestions' : 'favouriteTestQuestions';
  const url = isDefault ? 'questions' : 'test-questions';

  return (
    <ItemPageFrame
      item={item}
      changeBtn={<ChangeQuestionModal itemId={id} />}
      favouriteSettings={{
        storeName,
        dataUrl: `favourites/${url}/:id`,
      }}
      url="questions"
    />
  );
};

export default Question;
