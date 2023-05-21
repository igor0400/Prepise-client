import { Spinner, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { OutlineBtn, useRequest, useTypedSelector } from '../../../shared';
import { acceptTestReply, changeTabs, deleteTestReply } from '../../profile';
import { UserType } from '../../User';
import UserInCard from '../../UserInCard';
import { acceptReply } from '../lib/api/acceptReply';
import { deleteReply } from '../lib/api/deleteReply';
import { getAuthor } from '../lib/api/getAuthor';
import { ReplyType } from '../model/types/reply';

const Reply: FC<ReplyType> = ({ id, text, authorId, createdAt }) => {
  const { request } = useRequest(false);
  const { request: rejRequest, loading: rejLoading } = useRequest(true);
  const { request: accRequest, loading: accLoading } = useRequest(true);
  const [author, setAuthor] = useState<null | UserType>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();
  const { testId } = useTypedSelector((state) => state.profile.tabs);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const user = await request(getAuthor, false, authorId);
    setAuthor(user);
  }

  const handleAccept = async () => {
    const data = await accRequest(acceptReply, true, id);

    if (data) {
      const newQuery = JSON.parse(JSON.stringify(router.query));
      delete newQuery.replyId;

      router.push({ query: newQuery });
      dispatch(changeTabs({ testId }));
      dispatch(acceptTestReply({ testId, replyId: id }));

      toast({
        description: 'Ответ одобрен',
        status: 'success',
        duration: 2000,
      });
    }
  };

  const handleReject = async () => {
    const data = await rejRequest(deleteReply, true, id, authorId);

    if (data) {
      const newQuery = JSON.parse(JSON.stringify(router.query));
      delete newQuery.replyId;

      router.push({ query: newQuery });
      dispatch(changeTabs({ testId }));
      dispatch(deleteTestReply({ testId, replyId: id }));

      toast({
        description: 'Ответ отклонен',
        status: 'success',
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>

      <div className="flex gap-4 justify-between items-end pt-7">
        {author ? (
          <UserInCard
            {...author}
            date={createdAt}
            className="shadow w-fit py-3 pl-3 pr-7 rounded-md cursor-pointer"
          />
        ) : (
          <div></div>
        )}
        <div className="flex gap-2">
          <OutlineBtn className="h-fit text-sm" bg="red" onClick={handleReject}>
            {rejLoading ? (
              <Spinner size="sm" className="my-0.5 mx-8" />
            ) : (
              'Отклонить'
            )}
          </OutlineBtn>
          <OutlineBtn className="h-fit text-sm" onClick={handleAccept}>
            {accLoading ? (
              <Spinner size="sm" className="my-0.5 mx-7" />
            ) : (
              'Одобрить'
            )}
          </OutlineBtn>
        </div>
      </div>
    </div>
  );
};

export default Reply;
