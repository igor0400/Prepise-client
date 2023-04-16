import classNames from 'classnames';
import React, { FC, ReactNode, useMemo } from 'react';
import UserInItemPageCard from '../../../entities/UserInItemPageCard';
import FollowBtn from '../../../features/FollowBtn';
import ShareBtn from '../../../features/ShareBtn';
import UnfollowBtn from '../../../features/UnfollowBtn';
import { useTypedSelector } from '../../../shared';

interface Props {
  className?: string;
  authorId: number;
  withUser?: boolean;
  changeBtn: ReactNode;
}

const ItemPageToolbar: FC<Props> = ({
  className,
  authorId,
  changeBtn,
  withUser = true,
}) => {
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
          changeBtn
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
      {withUser && <UserInItemPageCard userId={authorId} />}
    </div>
  );
};

export default ItemPageToolbar;
