import { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainQuestions: FC = () => {
  return (
    <MainContentFrame
      name="questions"
      title="Вопросы"
      description="Это статьи в которых пользователи делятся опытом проходения собеседований. Вы можете быстро найти нужную вам тему по названию вопроса, а так же используя фильтры."
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
