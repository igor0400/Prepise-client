import { FC, useMemo } from 'react';
import UserPageFollowBtn from '../../../entities/UserPageFollowBtn';
import UserPageUnfollowBtn from '../../../entities/UserPageUnfollowBtn';
import FollowBtn from '../../../features/FollowBtn';
import UnfollowBtn from '../../../features/UnfollowBtn';
import { useTypedSelector } from '../../../shared';

interface Props {
  authorId: number;
}

const UPFollowBtn: FC<Props> = ({ authorId }) => {
  const followings = useTypedSelector(
    (state) => state.user.data?.followingUsers,
  );
  const isUserFollowed = useMemo(
    () => followings?.map((i) => i.id).includes(authorId),
    [followings],
  );

  return (
    <>
      {isUserFollowed ? (
        <UnfollowBtn authorId={authorId} Btn={UserPageUnfollowBtn} />
      ) : (
        <FollowBtn authorId={authorId} Btn={UserPageFollowBtn} />
      )}
    </>
  );
};

export default UPFollowBtn;
