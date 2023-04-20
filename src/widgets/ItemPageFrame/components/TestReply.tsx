import React, { FC, useEffect, useState } from 'react';
import CreateReplyForm from '../../../features/forms/CreateReplyForm';
import { useTypedSelector } from '../../../shared';

interface Props {
  replies: any[];
  questionId: number;
}

const TestReply: FC<Props> = ({ replies, questionId }) => {
  const userId = useTypedSelector((state) => state.user.data?.id);
  const [reply, setReply] = useState<any>(undefined);

  useEffect(() => {
    for (let reply of replies) {
      // if (reply.authorId === userId) setReply(reply);
    }
  }, [replies]);

  // сделать title жирнее
  // отрисовать reply, сделать изменение и тд

  if (reply)
    return (
      <div className="border-2 p-3 rounded-md">
        <div dangerouslySetInnerHTML={{ __html: reply.text }}></div>
      </div>
    );

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
