import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import follows from 'public/images/icons/follows-bold.svg';
import { useGetPersonalItems } from '../../../../entities/User';

const Follows: FC = () => {
  const { items, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetPersonalItems('followingUsers');

  console.log(items);

  return (
    <ProfileContentWrapper title="Подписки" icon={follows}>
      Подписки
    </ProfileContentWrapper>
  );
};

export default Follows;
