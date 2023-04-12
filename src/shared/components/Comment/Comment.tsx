import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { CommentType } from '../../../entities/Comment';
import { getParseDate } from '../../lib/assets/getParseDate';
import CommentReply from '../CommentReply/CommentReply';

interface Props {
  comment: CommentType;
  userId?: number;
  className?: string;
  replyBtn?: ReactNode;
  editBtn?: ReactNode;
}

const Comment: FC<Props> = ({
  comment,
  className,
  replyBtn,
  editBtn,
  userId,
}) => {
  const { user, createdAt, text, replies } = comment;

  // сделать форму для ответа перед ответами на сомментарий

  return (
    <div
      className={classNames('bg-gray-200 p-2 rounded', {
        [className ?? '']: className,
      })}
    >
      <div className="flex items-center gap-1">
        <p className="text-sm sm:text-base font-medium">{user.name}</p>
        <p className="text-gray-500 text-[10px] sm:text-xs">
          {getParseDate(createdAt)}
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-700">{text}</p>
      <div className="flex items-center justify-end gap-1">
        {editBtn}
        {replyBtn}
      </div>

      {replies.map((reply) => (
        <CommentReply
          key={reply.id}
          reply={reply}
          className="ml-6 mt-2"
          editBtn={
            userId === comment.authorId ? (
              <button className="flex ml-auto text-xs sm:text-sm text-blue-500">
                изменить
              </button>
            ) : undefined
          }
        />
      ))}
    </div>
  );
};

export default Comment;
