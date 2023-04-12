import React, { FC } from 'react';
import Image from 'next/image';
import dislike from 'public/images/icons/dislike.svg';
import activeDislike from 'public/images/icons/active-dislike.svg';
import { Spinner } from '@chakra-ui/react';
import classNames from 'classnames';

interface Props {
  dislikes: number;
  active?: boolean;
  size?: number;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  className?: string;
  isLoading?: boolean;
}

const Dislikes: FC<Props> = ({
  dislikes,
  size,
  onClick,
  className,
  active = false,
  isLoading = false,
}) => {
  return (
    <div
      className={classNames('flex gap-1 items-center', {
        [className ?? '']: className,
      })}
    >
      {isLoading ? (
        <Spinner size="sm" />
      ) : (
        <span className="text-xl md:text-2xl font-semibold">{dislikes}</span>
      )}

      <Image
        src={active ? activeDislike : dislike}
        alt="dislike"
        className="pt-2 cursor-pointer"
        width={size}
        height={size}
        onClick={onClick}
      />
    </div>
  );
};

export default Dislikes;
