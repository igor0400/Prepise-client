import { Spinner } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../entities/User';
import { InlineBtn, useRequest } from '../../../shared';
import { deleteFollowing } from '../lib/api/deleteFollowing';

interface Props {
  authorId: number;
}

const UnfollowBtn: FC<Props> = ({ authorId }) => {
  const { request, loading } = useRequest();
  const dispatch = useDispatch();

  const onClick = async () => {
    if (!loading) {
      const data = await request(deleteFollowing, true, [String(authorId)]);

      if (data) {
        dispatch(
          deleteItem({
            itemId: authorId,
            sectionName: 'followingUsers',
          }),
        );
      }
    }
  };

  return (
    <InlineBtn onClick={onClick} border="blue" className="text-sm sm:text-base">
      {loading ? (
        <Spinner size="sm" className="mx-20" />
      ) : (
        'Отписаться от автора'
      )}
    </InlineBtn>
  );
};

export default UnfollowBtn;
