import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { getParseDate, useTypedSelector } from '../../../shared';
import { changeTabs } from '../../profile/model/store/profileSlice';
import { parseReplyText, ReplyType } from '../../Reply';

const ProfileReply: FC<ReplyType> = ({ id, text, createdAt, accepted }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { testId } = useTypedSelector((state) => state.profile.tabs);

  return (
    <div
      className={classNames('bg-white p-3 rounded-md cursor-pointer', {
        'border border-green-500': accepted,
      })}
      style={{ boxShadow: '0px 1px 4px 0.5px rgba(0, 0, 0, 0.1)' }}
      onClick={() => {
        dispatch(changeTabs({ testId, replyId: id }));
        router.push({ query: { ...router.query, testId, replyId: id } });
      }}
    >
      <p>{parseReplyText(text)}</p>
      <p className="text-xs text-gray-500">{getParseDate(createdAt)}</p>
    </div>
  );
};

export default ProfileReply;
