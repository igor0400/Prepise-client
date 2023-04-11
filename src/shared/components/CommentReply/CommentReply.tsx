import React, { FC, ReactNode } from 'react';
import { CommentReplyType } from '../../../entities/CommentReply';
import { getParseDate } from '../../lib/assets/getParseDate';

interface Props {
  reply: CommentReplyType;
  className?: string;
  replyBtn?: ReactNode;
}

const CommentReply: FC<Props> = ({ reply, className, replyBtn }) => {
  const { user, text, createdAt } = reply;

  return (
    <div className={className}>
      <div className="flex items-center gap-1">
        <p className="text-sm sm:text-base font-medium">{user.name}</p>
        <p className="text-gray-500 text-[10px] sm:text-xs">
          {getParseDate(createdAt)}
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-700">{text}</p>

      {replyBtn}
    </div>
  );
};

export default CommentReply;
