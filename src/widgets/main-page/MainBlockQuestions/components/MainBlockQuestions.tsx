import React, { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainBlockQuestions: FC = () => {
  return (
    <MainContentFrame
      name="blockQuestions"
      url="blocks/default"
      ItemCard={ItemCard}
      favouriteSettings={{
        storeName: 'favouriteBlocks',
        dataUrl: 'favourites/blocks/:id',
      }}
    />
  );
};

export default MainBlockQuestions;
