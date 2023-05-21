import { useRouter } from 'next/router';
import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { changeTabs } from '../../../../entities/profile';
import { QuestionType } from '../../../../entities/Question';
import Reply, { ReplyType } from '../../../../entities/Reply';
import { useGetPersonalItems } from '../../../../entities/User';
import UserItemsFrame from '../../../../entities/UserItemsFrame';
import ReplyBtn from '../../../../features/ReplyBtn';
import { PaperIcon, useTypedSelector } from '../../../../shared';
import { ProfileContentWrapper } from '../../ProfileContent';
import ProfileReplies from '../../ProfileReplies';
import { getReplyTitle } from '../lib/assets/getReplyTitle';
import { getTestTitle } from '../lib/assets/getTestTitle';
import Title from './Title';

const Tests: FC = () => {
  const { items, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetPersonalItems('tests');
  const { testId, replyId } = useTypedSelector((state) => state.profile.tabs);
  const activeTest = useMemo(
    (): QuestionType => items?.filter((i: QuestionType) => i.id === testId)[0],
    [testId, items],
  );
  const replies: ReplyType[] = activeTest?.testQuestionInfo?.replies;
  const activeReply = useMemo(
    () => replies?.filter((i) => i.id === replyId)[0],
    [replyId, items],
  );
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.testId) {
      dispatch(changeTabs({ testId: +router.query.testId }));
    }
    if (router.query.replyId) {
      dispatch(changeTabs({ replyId: +router.query.replyId }));
    }

    if (testId) {
      router.push({ query: { ...router.query, testId } });
    }
    if (replyId) {
      router.push({ query: { ...router.query, replyId } });
    }
  }, []);

  return (
    <ProfileContentWrapper
      title={
        <Title
          main={{ title: 'Мои тесты' }}
          test={
            testId && items
              ? { title: getTestTitle(items, testId), id: testId }
              : undefined
          }
          reply={
            activeTest && replyId && replies
              ? {
                  title: getReplyTitle(replies, replyId),
                  id: replyId,
                }
              : undefined
          }
        />
      }
      icon={<PaperIcon style={{ width: 28, height: 28 }} color="#000" />}
    >
      {!testId && !replyId ? (
        <UserItemsFrame
          items={items ?? []}
          itemsLoading={loading}
          favouriteSettings={{
            storeName: 'favouriteTestQuestions',
            dataUrl: 'favourites/test-questions/:id',
          }}
          itemCardLink="tests"
          more={{
            loading: moreLoading,
            disabled: moreDisabled,
            getItems: getMoreItems,
          }}
          ReplyBtn={ReplyBtn}
        />
      ) : testId && !replyId ? (
        <ProfileReplies items={replies ?? []} />
      ) : testId && replyId ? (
        <Reply {...activeReply} />
      ) : (
        <div></div>
      )}
    </ProfileContentWrapper>
  );
};

export default Tests;
