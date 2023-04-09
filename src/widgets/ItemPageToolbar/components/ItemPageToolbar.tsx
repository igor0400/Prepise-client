import classNames from 'classnames';
import React, { FC, useMemo } from 'react';
import UserInItemPageCard from '../../../entities/UserInItemPageCard';
import FollowBtn from '../../../features/FollowBtn';
import ShareBtn from '../../../features/ShareBtn';
import UnfollowBtn from '../../../features/UnfollowBtn';
import { InlineBtn, useTypedSelector } from '../../../shared';

interface Props {
  className?: string;
  authorId: number;
}

const ItemPageToolbar: FC<Props> = ({ className, authorId }) => {
  const userId = useTypedSelector((state) => state.user.data?.id);
  const followings = useTypedSelector(
    (state) => state.user.data?.followingUsers,
  );

  const isUserFollowed = useMemo(
    () => followings?.map((i) => i.id).includes(authorId),
    [followings],
  );

  return (
    <div
      className={classNames(
        'flex flex-wrap gap-x-4 gap-y-3 justify-between items-end',
        {
          [className ?? '']: className,
        },
      )}
    >
      <div className="flex flex-wrap gap-2">
        <ShareBtn />
        {userId === authorId ? (
          <InlineBtn border="blue" className="text-sm sm:text-base">
            Изменить вопрос
          </InlineBtn>
        ) : (
          <>
            {isUserFollowed ? (
              <UnfollowBtn authorId={authorId} />
            ) : (
              <FollowBtn authorId={authorId} />
            )}
          </>
        )}
      </div>
      <UserInItemPageCard userId={authorId} />
    </div>
  );
};

export default ItemPageToolbar;
