import { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainTests: FC = () => {
  return (
    <MainContentFrame
      name="tests"
      title="Тесты"
      description="Это тестовые вопросы созданные компанией или пользователем. Для ответа на тест нажмите на его назвние и дайте развернутый ответ."
      url="questions/test"
      itemCard={{
        Component: ItemCard,
        link: 'tests',
      }}
      favouriteSettings={{
        storeName: 'favouriteTestQuestions',
        dataUrl: 'favourites/test-questions/:id',
      }}
      itemsName="тестов"
    />
  );
};

export default MainTests;
