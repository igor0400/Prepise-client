import React, { FC } from 'react';
import { BlockType } from '../../../entities/Block';
import ChangeBlockModal from '../../forms/ChangeBlockModal';
import ItemPageFrame from '../../ItemPageFrame';

const Block: FC<BlockType> = (item) => {
  return (
    <ItemPageFrame
      item={item}
      changeBtn={<ChangeBlockModal itemId={item.id} />}
      favouriteSettings={{
        storeName: 'favouriteBlocks',
        dataUrl: 'favourites/blocks/:id',
      }}
      url="blocks"
    />
  );
};

export default Block;
