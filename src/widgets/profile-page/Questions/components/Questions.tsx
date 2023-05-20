import React, { FC } from 'react';
import { useGetPersonalItems } from '../../../../entities/User';
import UserItemsFrame from '../../../../entities/UserItemsFrame';
import { QuestionIcon } from '../../../../shared';
import { ProfileContentWrapper } from '../../ProfileContent';

const Questions: FC = () => {
  const { items, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetPersonalItems('questions');

  return (
    <ProfileContentWrapper
      title="Мои вопросы"
      icon={<QuestionIcon style={{ width: 28, height: 28 }} color="#000" />}
    >
      <UserItemsFrame
        items={items ?? []}
        itemsLoading={loading}
        favouriteSettings={{
          storeName: 'favouriteQuestions',
          dataUrl: 'favourites/questions/:id',
        }}
        itemCardLink="questions"
        more={{
          loading: moreLoading,
          disabled: moreDisabled,
          getItems: getMoreItems,
        }}
      />
    </ProfileContentWrapper>
  );
};

export default Questions;
