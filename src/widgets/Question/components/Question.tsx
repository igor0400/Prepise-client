import React, { FC } from 'react';
import ItemPageBar from '../../../entities/ItemPageBar';
import { QuestionType } from '../../../entities/Question';

const Question: FC<QuestionType> = ({
  id,
  title,
  dislikes,
  likes,
  viewes,
  createdAt,
  updatedAt,
}) => {
  const barProps = { title, dislikes, likes, viewes, createdAt, updatedAt };

  return (
    <div className="pt-14 pb-28 max-w-5xl mx-auto">
      <ItemPageBar {...barProps} />
    </div>
  );
};

export default Question;
