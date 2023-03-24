import { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainBlockTests: FC = () => {
  return (
    <MainContentFrame
      name="blockTests"
      url="blocks/test"
      ItemCard={ItemCard}
      favouriteSettings={{
        storeName: 'favouriteTestBlocks',
        dataUrl: 'favourites/test-blocks/:id',
      }}
    />
  );
};

export default MainBlockTests;
