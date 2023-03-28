import { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainQuestions: FC = () => {
  return (
    <MainContentFrame
      title="Вопросы"
      name="questions"
      url="questions/default"
      itemCard={{
        Component: ItemCard,
        link: 'questions',
      }}
      favouriteSettings={{
        storeName: 'favouriteQuestions',
        dataUrl: 'favourites/questions/:id',
      }}
    />
  );
};

export default MainQuestions;
