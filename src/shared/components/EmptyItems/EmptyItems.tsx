import Image from 'next/image';
import React, { FC } from 'react';

import emptyBox from 'public/images/empty-box.svg';
import { useMediaQuery } from '@chakra-ui/react';

interface Props {
  itemsName?: string;
}

const EmptyItems: FC<Props> = ({ itemsName }) => {
  const [isLargerThan769] = useMediaQuery('(min-width: 769px)');

  const imgSize = isLargerThan769 ? 100 : 75;

  return (
    <div className="flex flex-col pt-20 w-full">
      <Image
        className="mx-auto"
        src={emptyBox}
        alt="empty box"
        width={imgSize}
        height={imgSize}
      />
      <h3 className="text-xl font-semibold sm:font-bold text-center md:mt-2 text-gray-400">
        Список {isLargerThan769 && itemsName} пуст
      </h3>
    </div>
  );
};

export default EmptyItems;
