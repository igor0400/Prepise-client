import { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainBlockTests: FC = () => {
  return (
    <MainContentFrame
      title="Блоки тестов"
      name="blockTests"
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
