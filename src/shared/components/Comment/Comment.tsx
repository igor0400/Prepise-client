import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { CommentType } from '../../../entities/Comment';
import { getParseDate } from '../../lib/assets/getParseDate';
import CommentReply from '../CommentReply/CommentReply';

interface Props {
  comment: CommentType;
  className?: string;
  replyBtn?: ReactNode;
}

const Comment: FC<Props> = ({ comment, className, replyBtn }) => {
  const { user, createdAt, text, replies } = comment;

  return (
    <div
      className={classNames('bg-gray-200 p-2 rounded', {
        [className ?? '']: className,
      })}
    >
      <div>
        <div className="flex items-center gap-1">
          <p className="text-sm sm:text-base font-medium">{user.name}</p>
          <p className="text-gray-500 text-[10px] sm:text-xs">
            {getParseDate(createdAt)}
          </p>
        </div>

        <p className="text-sm sm:text-base text-gray-700">{text}</p>

        {replyBtn}
      </div>

      {replies.map((reply) => (
        <CommentReply
          key={reply.id}
          reply={reply}
          className="ml-6"
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

export default Comment;
