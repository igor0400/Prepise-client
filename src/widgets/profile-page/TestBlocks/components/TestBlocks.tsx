import React, { FC } from 'react';
import { useGetPersonalItems } from '../../../../entities/User';
import UserItemsFrame from '../../../../entities/UserItemsFrame';
import { BlockPapersIcon } from '../../../../shared';
import { ProfileContentWrapper } from '../../ProfileContent';

const TestBlocks: FC = () => {
  const { items, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetPersonalItems('testBlocks');

  return (
    <ProfileContentWrapper
      title="Мои блоки тестов"
      icon={<BlockPapersIcon style={{ width: 28, height: 28 }} color="#000" />}
    >
      <UserItemsFrame
        items={items ?? []}
        itemsLoading={loading}
        favouriteSettings={{
          storeName: 'favouriteTestBlocks',
          dataUrl: 'favourites/test-blocks/:id',
        }}
        itemCardLink="tests-blocks"
        more={{
          loading: moreLoading,
          disabled: moreDisabled,
          getItems: getMoreItems,
        }}
      />
    </ProfileContentWrapper>
  );
};

export default TestBlocks;
