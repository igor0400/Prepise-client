import React, { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainBlockQuestions: FC = () => {
  return (
    <MainContentFrame
      name="blockQuestions"
      title="Блоки вопросов"
      description="Это совмещённые по смыслу вопросы. Для перехода на страницу блока нажмите на его название."
      url="blocks/default"
      itemCard={{
        Component: ItemCard,
        link: 'questions-blocks',
      }}
      favouriteSettings={{
        storeName: 'favouriteBlocks',
        dataUrl: 'favourites/blocks/:id',
      }}
      itemsName="блоков с вопросами"
    />
  );
};

export default MainBlockQuestions;
