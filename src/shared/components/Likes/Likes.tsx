import Image from 'next/image';
import React, { FC } from 'react';
import like from 'public/images/icons/like.svg';
import activeLike from 'public/images/icons/active-like.svg';
import { Spinner } from '@chakra-ui/react';
import classNames from 'classnames';

interface Props {
  likes: number;
  active?: boolean;
  size?: number;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  className?: string;
  isLoading?: boolean;
}

const Likes: FC<Props> = ({
  likes,
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
        <span className="text-xl md:text-2xl font-semibold">{likes}</span>
      )}

      <Image
        src={active ? activeLike : like}
        alt="like"
        className="pb-1.5 md:pb-2 cursor-pointer"
        width={size ?? 28}
        height={size ?? 28}
        onClick={onClick}
      />
    </div>
  );
};

export default Likes;
