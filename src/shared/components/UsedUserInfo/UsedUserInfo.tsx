import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';
import React, { FC } from 'react';
import { getParseDate } from '../../lib/assets/getParseDate';

interface Props {
  createdAt: string;
  updatedAt: string;
  viewes: number;
}

const UsedUserInfo: FC<Props> = ({ createdAt, updatedAt, viewes }) => {
  const [isLargerThan521] = useMediaQuery('(min-width: 521px)');

  return (
    <div
      className={classNames('gap-2 text-xs md:text-sm text-gray-500', {
        flex: isLargerThan521,
      })}
    >
      <p>
        Опубликовано:{' '}
        <span className="text-black">{getParseDate(createdAt)}</span>
      </p>
      <p>
        Изменено:{' '}
        <span className="text-black">
          {createdAt === updatedAt ? 'Нет' : getParseDate(updatedAt)}
        </span>
      </p>
      <p>
        Просмотры: <span className="text-black">{viewes}</span>
      </p>
    </div>
  );
};

export default UsedUserInfo;
