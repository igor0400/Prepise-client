import React, { FC, useState } from 'react';
import { CommentType } from '../../../entities/Comment';
import Comment from './Comment';

interface Props {
  comments: CommentType[];
  className?: string;
  url: string;
}

const CommentsList: FC<Props> = ({ comments, className, url }) => {
  const [activeReply, setActiveReply] = useState<number | null>(null);

  return (
    <div className={className}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          url={url}
          comment={comment}
          setActiveReply={setActiveReply}
          activeReply={activeReply}
        />
      ))}
    </div>
  );
};

export default CommentsList;
