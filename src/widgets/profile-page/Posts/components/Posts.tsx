import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useGetPersonalItems } from '../../../../entities/User';
import UserPosts from '../../../Posts';

const Posts: FC = () => {
  const { items, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetPersonalItems('posts');

  return (
    <ProfileContentWrapper
      title="Мои посты"
      icon={<NewspaperIcon style={{ fontSize: 28 }} />}
    >
      <UserPosts
        items={items ?? []}
        itemsLoading={loading}
        postStyle={{ boxShadow: '0px 1px 4px 0.5px rgba(0, 0, 0, 0.1)' }}
        more={{
          loading: moreLoading,
          disabled: moreDisabled,
          getItems: getMoreItems,
        }}
        gap={4}
      />
    </ProfileContentWrapper>
  );
};

export default Posts;
