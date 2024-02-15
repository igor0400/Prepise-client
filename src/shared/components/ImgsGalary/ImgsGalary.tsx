import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { CSSProperties, FC } from 'react';
import { getFileUrl } from '../../lib/assets/getFileUrl';
import Fancybox from './Fancybox';

interface Props {
  imgs: string[];
  className?: string;
  setShow: (value: boolean) => any;
  imgWidth: number;
  imgHeight: number;
  imgStyle?: CSSProperties;
  imgActiveStyle?: CSSProperties;
  imgClassName?: string;
  activeIndex?: number;
}

const ImgsGalary: FC<Props> = ({
  imgs,
  className,
  setShow,
  imgWidth,
  imgHeight,
  imgStyle,
  imgActiveStyle = {},
  imgClassName,
  activeIndex,
}) => {
  return (
    <Fancybox className={className}>
      {imgs.map((url, i) => (
        <Link
          data-fancybox="gallery"
          href={getFileUrl(url)}
          className={classNames('', {
            'row-start-1 row-end-3': i === activeIndex,
          })}
          key={i}
        >
          <Image
            alt="img"
            src={getFileUrl(url)}
            loader={() => getFileUrl(url)}
            width={imgWidth}
            height={imgHeight}
            style={
              i === activeIndex ? { ...imgStyle, ...imgActiveStyle } : imgStyle
            }
            className={classNames('rounded-md', {
              [imgClassName ?? '']: imgClassName,
            })}
            onError={(e) => {
              //@ts-ignore
              e.target.style.display = 'none';
              if (i + 1 === imgs.length) setShow(false);
            }}
          />
        </Link>
      ))}
    </Fancybox>
  );
};

export default ImgsGalary;
