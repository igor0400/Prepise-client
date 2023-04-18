import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';
import React, { FC } from 'react';

interface Props {
  section: string;
  position?: string;
  company?: string;
}

const ItemInfo: FC<Props> = ({ section, position, company }) => {
  const [isLargerThan465] = useMediaQuery('(min-width: 465px)');

  return (
    <div
      className={classNames('gap-2 text-sm md:text-base text-gray-500', {
        flex: isLargerThan465,
      })}
    >
      {section && (
        <p>
          Раздел: <span className="text-black">{section}</span>
        </p>
      )}

      {position && (
        <p>
          Должность: <span className="text-black">{position}</span>
        </p>
      )}

      {company && (
        <p>
          Компания: <span className="text-black">{company}</span>
        </p>
      )}
    </div>
  );
};

export default ItemInfo;
