import React, { FC } from 'react';
import { CommentType } from '../../../entities/Comment';
import { Comment } from '../../../shared';

interface Props {
  comments: CommentType[];
  className?: string;
}

const CemmentsList: FC<Props> = ({ comments, className }) => {
  return (
    <div className={className}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          className="mt-2"
          comment={comment}
          replyBtn={
            <button className="flex ml-auto text-xs sm:text-sm text-blue-500">
              изменить
            </button>
          }
        />
      ))}
    </div>
  );
};

export default CemmentsList;
