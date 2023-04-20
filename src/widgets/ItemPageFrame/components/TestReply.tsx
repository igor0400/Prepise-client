import React, { FC, useEffect, useState } from 'react';
import CreateReplyForm from '../../../features/forms/CreateReplyForm';
import { useTypedSelector } from '../../../shared';
import ReplyView from './ReplyView';

interface Props {
  replies: any[];
  questionId: number;
}

const TestReply: FC<Props> = ({ replies, questionId }) => {
  const userId = useTypedSelector((state) => state.user.data?.id);
  const [reply, setReply] = useState<any>(undefined);

  useEffect(() => {
    for (let reply of replies) {
      if (reply.authorId === userId) setReply(reply);
    }
  }, [replies]);

  if (reply) return <ReplyView reply={reply} />;

  const createReply = (reply: any) => {
    setReply(reply);
  };

  return (
    <CreateReplyForm
      title="Ответить"
      placeholder="Развернутый ответ..."
      url={`questions/reply/test-question/${questionId}`}
      createReply={createReply}
    />
  );
};

export default TestReply;
