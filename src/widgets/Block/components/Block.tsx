import React, { FC } from 'react';
import { BlockType } from '../../../entities/Block';
import ChangeBlockModal from '../../forms/ChangeBlockModal';
import ItemPageFrame from '../../ItemPageFrame';

const Block: FC<BlockType> = (item) => {
  const { id, type } = item;

  return (
    <ItemPageFrame
      item={item}
      changeBtn={<ChangeBlockModal itemId={id} />}
      favouriteSettings={{
        storeName:
          type === 'default' ? 'favouriteBlocks' : 'favouriteTestBlocks',
        dataUrl: 'favourites/blocks/:id',
      }}
      url="blocks"
    />
  );
};

export default Block;
