import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { CommentType } from '../../../entities/Comment';
import { getParseDate } from '../../lib/assets/getParseDate';
import CommentReply from '../CommentReply/CommentReply';

interface Props {
  comment: CommentType;
  className?: string;
  replyBtn?: ReactNode;
  replyForm?: ReactNode;
}

const Comment: FC<Props> = ({ comment, className, replyBtn, replyForm }) => {
  const { user, createdAt, text, replies } = comment;

  return (
    <div
      className={classNames('bg-gray-200 p-2 rounded', {
        [className ?? '']: className,
      })}
    >
      <div className="flex items-center gap-1">
        <p className="text-sm sm:text-base font-medium">{user?.name}</p>
        <p className="text-gray-500 text-[10px] sm:text-xs">
          {getParseDate(createdAt)}
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-700">{text}</p>
      <div className="flex justify-end">{replyBtn}</div>

      {replyForm && <div className="mt-2">{replyForm}</div>}

      {replies?.length > 0 &&
        replies.map((reply, i) => (
          <CommentReply
            key={reply.id}
            reply={reply}
            className={classNames('ml-6', {
              'mt-3': i !== 0,
              'mt-1': i === 0,
              'mb-1': i + 1 === replies.length,
            })}
          />
        ))}
    </div>
  );
};

export default Comment;
