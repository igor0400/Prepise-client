import { Spinner } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../entities/User';
import {
  InlineBtn,
  useRedirectToLogin,
  useRequest,
  useTypedSelector,
} from '../../../shared';
import { getUser } from '../lib/api/getUser';
import { postFollowing } from '../lib/api/postFollowing';

interface Props {
  authorId: number;
}

const FollowBtn: FC<Props> = ({ authorId }) => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  const { request, loading } = useRequest();
  const redirect = useRedirectToLogin();
  const dispatch = useDispatch();

  const onClick = async () => {
    if (!loading) {
      if (isAuth) {
        const data = await request(postFollowing, true, [String(authorId)]);
        if (data) {
          const user = await request(getUser, true, authorId);
          if (user) {
            dispatch(addItem({ item: user, sectionName: 'followingUsers' }));
          }
        }
      } else {
        redirect();
      }
    }
  };

  return (
    <InlineBtn onClick={onClick} border="blue" className="text-sm sm:text-base">
      {loading ? (
        <Spinner size="sm" className="mx-20" />
      ) : (
        'Подписаться на автора'
      )}
    </InlineBtn>
  );
};

export default FollowBtn;
