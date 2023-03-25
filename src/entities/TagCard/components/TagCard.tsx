import { Card, CardBody } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { TagType } from '../../Tag';
import { getEnding } from '../lib/assets/getEnding';

interface Props {
  favouriteBtn: ReactNode;
  item: TagType;
}

const TagCard: FC<Props> = ({ favouriteBtn, item }) => {
  const { name, description, used } = item;

  return (
    <Card>
      <CardBody>
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg -mt-1">{name}</h3>
          {favouriteBtn}
        </div>
        <p className="text-gray-600">{description}</p>
        <p className="text-xs text-right pt-2 text-gray-500">
          {used} использован{getEnding(used)}
        </p>
      </CardBody>
    </Card>
  );
};

export default TagCard;
