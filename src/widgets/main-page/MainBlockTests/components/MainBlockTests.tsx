import { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainBlockTests: FC = () => {
  return (
    <MainContentFrame
      name="blockTests"
      title="Блоки тестов"
      description="Это совмещённые по смыслу тесты. Вы сможете завершить прохождение блока только после ответа на все тесты."
      url="blocks/test"
      itemCard={{
        Component: ItemCard,
        link: 'tests-blocks',
      }}
      favouriteSettings={{
        storeName: 'favouriteTestBlocks',
        dataUrl: 'favourites/test-blocks/:id',
      }}
    />
  );
};

export default MainBlockTests;
