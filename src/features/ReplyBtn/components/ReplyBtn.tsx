import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { changeTabs } from '../../../entities/profile';
import { OutlineBtn } from '../../../shared';

interface Props {
  itemId: number;
}

const ReplyBtn: FC<Props> = ({ itemId }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <OutlineBtn
      onClick={(e) => {
        e.preventDefault();
        dispatch(changeTabs({ testId: itemId }));
        router.push({ query: { ...router.query, testId: itemId } });
      }}
      className="text-xs"
      bg="blue"
    >
      Ответы
    </OutlineBtn>
  );
};

export default ReplyBtn;
