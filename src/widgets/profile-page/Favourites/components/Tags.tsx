import React, { FC } from 'react';
import TagCard from '../../../../entities/TagCard';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';

interface Props {
  items: any[];
}

const Tags: FC<Props> = ({ items }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {items.map(({ item }) => (
        <TagCard
          item={item}
          favouriteBtn={
            <FavouriteIconBtn
              // size={isSmallerThan1279 ? 'small' : 'big'}
              size="big"
              item={item}
              storeName="favouriteTags"
              dataUrl="favourites/tags/:id"
            />
          }
        />
      ))}
    </div>
  );
};

export default Tags;
