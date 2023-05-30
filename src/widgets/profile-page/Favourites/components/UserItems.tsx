import { useMediaQuery } from '@chakra-ui/react';
import React, { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';
import { itemsLinks, itemsNames } from '../configs/items';
import { Groups } from '../model/types';

interface Props {
  items: any[];
  activeGroup: Groups;
}

const UserItems: FC<Props> = ({ items, activeGroup }) => {
  const [isSmallerThan641] = useMediaQuery('(max-width: 641px)');

  return (
    <div className="flex flex-col gap-3">
      {items.map(({ item }) => (
        <ItemCard
          compact
          link={itemsLinks[activeGroup]}
          {...item}
          favouriteBtn={
            <FavouriteIconBtn
              size={isSmallerThan641 ? 'small' : 'big'}
              item={item}
              storeName={itemsNames[activeGroup]}
              dataUrl={`favourites/${activeGroup}/:id`}
            />
          }
          size={isSmallerThan641 ? 'small' : 'big'}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default UserItems;
