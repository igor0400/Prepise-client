import React, { FC } from 'react';
import UserCard from '../../../../entities/UserCard';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';
import { itemsNames } from '../configs/items';
import { Groups } from '../model/types';

interface Props {
  items: any[];
  activeGroup: Groups;
}

const UsersAndCompanies: FC<Props> = ({ items, activeGroup }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {items.map(({ item }) => (
        <UserCard
          item={{ ...item, description: null }}
          favouriteBtn={
            <FavouriteIconBtn
              // size={isSmallerThan641 ? 'small' : 'big'}
              item={item}
              storeName={itemsNames[activeGroup]}
              dataUrl={`favourites/${activeGroup}/:id`}
            />
          }
          key={item.id}
        />
      ))}
    </div>
  );
};

export default UsersAndCompanies;
