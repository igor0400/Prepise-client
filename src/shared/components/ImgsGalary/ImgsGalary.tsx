import { useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { getFileUrl } from '../../lib/assets/getFileUrl';
import Fancybox from './Fancybox';

interface Props {
  imgs: string[];
  className?: string;
  setShow: (value: boolean) => any;
}

const ImgsGalary: FC<Props> = ({ imgs, className, setShow }) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  const size = isLargerThan768 ? 150 : isLargerThan640 ? 100 : 80;

  return (
    <Fancybox className={className}>
      {imgs.map((url, i) => (
        <a data-fancybox="gallery" href={getFileUrl(url)} key={i}>
          <Image
            alt="img"
            src={getFileUrl(url)}
            width={size}
            height={size}
            onError={(e) => {
              //@ts-ignore
              e.target.style.display = 'none';
              if (i + 1 === imgs.length) setShow(false);
            }}
          />
        </a>
      ))}
    </Fancybox>
  );
};

export default ImgsGalary;
