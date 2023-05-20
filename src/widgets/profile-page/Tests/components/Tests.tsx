import React, { FC } from 'react';
import { useGetPersonalItems } from '../../../../entities/User';
import UserItemsFrame from '../../../../entities/UserItemsFrame';
import { PaperIcon } from '../../../../shared';
import { ProfileContentWrapper } from '../../ProfileContent';

const Tests: FC = () => {
  const { items, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetPersonalItems('tests');

  // сделать все без wrapper-ов и сделать в redux profile страницы
  // сделать три страницы и ренерить их в зависимости от active page в redux

  return (
    <ProfileContentWrapper
      title="Мои тесты"
      icon={<PaperIcon style={{ width: 28, height: 28 }} color="#000" />}
    >
      <UserItemsFrame
        items={items ?? []}
        itemsLoading={loading}
        favouriteSettings={{
          storeName: 'favouriteTestQuestions',
          dataUrl: 'favourites/test-questions/:id',
        }}
        itemCardLink="tests"
        more={{
          loading: moreLoading,
          disabled: moreDisabled,
          getItems: getMoreItems,
        }}
      />
    </ProfileContentWrapper>
  );
};

export default Tests;
