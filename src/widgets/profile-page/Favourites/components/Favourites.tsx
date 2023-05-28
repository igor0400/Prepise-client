import React, { FC, useState } from 'react';
import favourite from 'public/images/icons/fvourite-inline-bold.svg';
import { ProfileContentWrapper } from '../../ProfileContent';
import ActiveSelect from './ActiveSelect';
import { Groups } from '../model/types';
import { EmptyItems, useTypedSelector } from '../../../../shared';
import UserItems from './UserItems';
import { itemsNames } from '../configs/items';
import UsersAndCompanies from './UsersAndCompanies';
import Tags from './Tags';

const Favourites: FC = () => {
  const [activeGroup, setActiveGroup] = useState<Groups>('questions');
  const items = useTypedSelector((state) =>
    state.user.data ? state.user.data[itemsNames[activeGroup]] : null,
  );

  const handleChange = (value: Groups) => {
    setActiveGroup(value);
  };

  return (
    <ProfileContentWrapper title="Избранное" icon={favourite} iconSize={20}>
      <ActiveSelect handleChange={handleChange} />

      {!items?.length ? (
        <EmptyItems />
      ) : (
        <div className="mt-5">
          {activeGroup === 'users' || activeGroup === 'companies' ? (
            <UsersAndCompanies items={items} activeGroup={activeGroup} />
          ) : activeGroup === 'tags' ? (
            <Tags items={items} />
          ) : (
            <UserItems items={items} activeGroup={activeGroup} />
          )}
        </div>
      )}
    </ProfileContentWrapper>
  );
};

export default Favourites;
