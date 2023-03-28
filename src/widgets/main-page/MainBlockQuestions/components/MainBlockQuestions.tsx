import React, { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainBlockQuestions: FC = () => {
  return (
    <MainContentFrame
      name="blockQuestions"
      title="Блоки вопросов"
      url="blocks/default"
      itemCard={{
        Component: ItemCard,
        link: 'questions-blocks'
      }}
      favouriteSettings={{
        storeName: 'favouriteBlocks',
        dataUrl: 'favourites/blocks/:id',
      }}
    />
  );
};

export default MainBlockQuestions;
