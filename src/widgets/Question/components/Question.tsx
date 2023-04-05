import React, { FC } from 'react';
import ItemPageBar from '../../../entities/ItemPageBar';
import { QuestionType } from '../../../entities/Question';

const Question: FC<QuestionType> = (item) => {
  return (
    <div className="pt-14 pb-28 max-w-5xl mx-auto">
      <ItemPageBar
        item={item}
        favouriteSettings={{
          storeName: 'favouriteQuestions',
          dataUrl: 'favourites/questions/:id',
        }}
      />
    </div>
  );
};

export default Question;
