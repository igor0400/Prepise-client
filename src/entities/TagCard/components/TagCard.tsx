import { Card, CardBody } from '@chakra-ui/react';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { TagType } from '../../Tag';
import { getEnding } from '../lib/assets/getEnding';

interface Props {
  favouriteBtn: ReactNode;
  item: TagType;
  size?: 'big' | 'small';
}

const TagCard: FC<Props> = ({ favouriteBtn, item, size = 'big' }) => {
  const { name, description, used } = item;

  return (
    <Card>
      <CardBody className="flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3
              className={classNames('font-semibold -mt-1', {
                'text-lg': size === 'big',
              })}
            >
              {name}
            </h3>
            {favouriteBtn}
          </div>
          <p
            className={classNames('text-gray-600', {
              'text-sm': size === 'small',
            })}
          >
            {description}
          </p>
        </div>

        <p className="text-xs text-right pt-2 text-gray-500">
          {used} использован{getEnding(used)}
        </p>
      </CardBody>
    </Card>
  );
};

export default TagCard;
