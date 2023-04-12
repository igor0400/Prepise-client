import React, { FC } from 'react';
import { CommentType } from '../../../entities/Comment';
import { Comment, useTypedSelector } from '../../../shared';

interface Props {
  comments: CommentType[];
  className?: string;
}

const CemmentsList: FC<Props> = ({ comments, className }) => {
  const userId = useTypedSelector((state) => state.user.data?.id);

  return (
    <div className={className}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          className="mt-2"
          comment={comment}
          userId={userId}
          replyBtn={
            <button className="text-xs sm:text-sm text-blue-500">
              ответить
            </button>
          }
          editBtn={
            userId === comment.authorId ? (
              <button className="text-xs sm:text-sm text-blue-500">
                изменить
              </button>
            ) : undefined
          }
        />
      ))}
    </div>
  );
};

export default CemmentsList;
