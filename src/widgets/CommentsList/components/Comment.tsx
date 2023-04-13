import React, { FC, useState } from 'react';
import { CommentType } from '../../../entities/Comment';
import CreateCommentForm from '../../../features/forms/CreateCommentForm';
import { Comment as CommentUI, sortByDate } from '../../../shared';

interface Props {
  comment: CommentType;
  setActiveReply: Function;
  activeReply: number | null;
  url: string;
}

const Comment: FC<Props> = ({ comment, setActiveReply, activeReply, url }) => {
  const [replies, setReplies] = useState(
    sortByDate(comment.replies ?? [], 'newest'),
  );

  return (
    <CommentUI
      key={comment.id}
      className="mt-2"
      comment={{ ...comment, replies }}
      replyBtn={
        <button
          className="text-xs sm:text-sm text-blue-500"
          onClick={() => {
            setActiveReply((state: number | null) =>
              state === comment.id ? null : comment.id,
            );
          }}
        >
          {activeReply === comment.id ? 'закрыть' : 'ответить'}
        </button>
      }
      replyForm={
        activeReply === comment.id ? (
          <CreateCommentForm
            url={`${url}/reply/comment/${comment.id}`}
            placeholder="Комментарий..."
            createComment={(value) => {
              setReplies((state: any[]) => [value, ...state]);
              setActiveReply(null);
            }}
          />
        ) : undefined
      }
    />
  );
};

export default Comment;
