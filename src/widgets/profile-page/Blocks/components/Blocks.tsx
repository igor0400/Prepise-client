import React, { FC } from 'react';
import { useGetPersonalItems } from '../../../../entities/User';
import UserItemsFrame from '../../../../entities/UserItemsFrame';
import { BlockQuestionIcon } from '../../../../shared';
import { ProfileContentWrapper } from '../../ProfileContent';

const Blocks: FC = () => {
  const { items, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetPersonalItems('blocks');

  return (
    <ProfileContentWrapper
      title="Мои блоки"
      icon={
        <BlockQuestionIcon style={{ width: 28, height: 28 }} color="#000" />
      }
    >
      <UserItemsFrame
        items={items ?? []}
        itemsLoading={loading}
        favouriteSettings={{
          storeName: 'favouriteBlocks',
          dataUrl: 'favourites/blocks/:id',
        }}
        itemCardLink="questions-blocks"
        more={{
          loading: moreLoading,
          disabled: moreDisabled,
          getItems: getMoreItems,
        }}
      />
    </ProfileContentWrapper>
  );
};

export default Blocks;
