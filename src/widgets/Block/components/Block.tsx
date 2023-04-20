import React, { FC } from 'react';
import { BlockType } from '../../../entities/Block';
import ChangeBlockModal from '../../forms/ChangeBlockModal';
import ItemPageFrame from '../../ItemPageFrame';

const Block: FC<BlockType> = (item) => {
  const { id, type } = item;

  const isDefault = type === 'default';
  const storeName = isDefault ? 'favouriteBlocks' : 'favouriteTestBlocks';
  const url = isDefault ? 'blocks' : 'test-blocks';

  return (
    <ItemPageFrame
      item={item}
      changeBtn={<ChangeBlockModal itemId={id} />}
      favouriteSettings={{
        storeName,
        dataUrl: `favourites/${url}/:id`,
      }}
      url="blocks"
    />
  );
};

export default Block;
