import classNames from 'classnames';
import { useRouter } from 'next/router';
import { FC, ReactNode, useMemo } from 'react';
import InlineFollowBtn from '../../../entities/InlineFollowBtn';
import InlineUnfollowBtn from '../../../entities/InlineUnfollowBtn';
import UserInItemPageCard from '../../../entities/UserInItemPageCard';
import FollowBtn from '../../../features/FollowBtn';
import ShareBtn from '../../../features/ShareBtn';
import UnfollowBtn from '../../../features/UnfollowBtn';
import { InlineBtn, useTypedSelector } from '../../../shared';

interface Props {
  className?: string;
  authorId: number;
  authorType: 'user' | 'company';
  withUser?: boolean;
  changeBtn: ReactNode;
}

const ItemPageToolbar: FC<Props> = ({
  className,
  authorId,
  changeBtn,
  withUser = true,
  authorType,
}) => {
  const userId = useTypedSelector((state) => state.user.data?.id);
  const followings = useTypedSelector(
    (state) => state.user.data?.followingUsers,
  );
  const router = useRouter();

  const isUserFollowed = useMemo(
    () => followings?.map((i) => i.userId).includes(authorId),
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
              <UnfollowBtn authorId={authorId} Btn={InlineUnfollowBtn} />
            ) : (
              <FollowBtn
                type={authorType}
                authorId={authorId}
                Btn={InlineFollowBtn}
              />
            )}
          </>
        )}
        <InlineBtn
          className="text-sm sm:text-base"
          border="gray"
          onClick={() => router.back()}
        >
          Назад
        </InlineBtn>
      </div>
      {withUser && <UserInItemPageCard userId={authorId} />}
    </div>
  );
};

export default ItemPageToolbar;
