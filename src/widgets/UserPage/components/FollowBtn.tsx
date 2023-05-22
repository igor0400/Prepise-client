import { FC, useMemo } from 'react';
import UserPageFollowBtn from '../../../entities/UserPageFollowBtn';
import UserPageUnfollowBtn from '../../../entities/UserPageUnfollowBtn';
import FollowBtn from '../../../features/FollowBtn';
import UnfollowBtn from '../../../features/UnfollowBtn';
import { useTypedSelector } from '../../../shared';

interface Props {
  authorId: number;
  type: 'user' | 'company';
}

const UPFollowBtn: FC<Props> = ({ authorId, type }) => {
  const followings = useTypedSelector(
    (state) => state.user.data?.followingUsers,
  );
  const userId = useTypedSelector((state) => state.user.data?.id);
  const isUserFollowed = useMemo(
    () => followings?.map((i) => i.followedUserId).includes(userId),
    [followings],
  );

  return (
    <>
      {isUserFollowed ? (
        <UnfollowBtn authorId={authorId} Btn={UserPageUnfollowBtn} />
      ) : (
        <FollowBtn authorId={authorId} type={type} Btn={UserPageFollowBtn} />
      )}
    </>
  );
};

export default UPFollowBtn;
