import React, { FC } from 'react';
import { useGetPersonalItems } from '../../../../entities/User';
import UserItemsFrame from '../../../../entities/UserItemsFrame';
import { PaperIcon } from '../../../../shared';
import { ProfileContentWrapper } from '../../ProfileContent';
import Title from './Title';

const Tests: FC = () => {
  const { items, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetPersonalItems('tests');

  // сделать redux и страницы
  // сделать в itemCard кнопку с ссылкой на тест

  return (
    <ProfileContentWrapper
      title={
        <Title
          main={{ title: 'Мои тесты' }}
          test={{ title: 'Всем привет', id: 1 }}
          reply={{ title: 'Всем привет', id: 1 }}
        />
      }
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
