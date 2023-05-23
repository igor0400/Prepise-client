import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import follows from 'public/images/icons/follows-bold.svg';
import { useGetPersonalItems } from '../../../../entities/User';
import ClearUserCard from '../../../../entities/ClearUserCard';
import { CenteredLoader } from '../../../../shared';
import ShowMoreBtn from '../../../../entities/ShowMoreBtn';

const Follows: FC = () => {
  const { items, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetPersonalItems('followingUsers');

  return (
    <ProfileContentWrapper title="Подписки" icon={follows}>
      {loading ? (
        <CenteredLoader className="my-16" />
      ) : (
        <>
          <div className="flex gap-3 flex-wrap">
            {items.map((item: any) => (
              <ClearUserCard {...item.user} />
            ))}
          </div>
          {!moreDisabled && (
            <ShowMoreBtn onClick={getMoreItems} loading={moreLoading} />
          )}
        </>
      )}
    </ProfileContentWrapper>
  );
};

export default Follows;
