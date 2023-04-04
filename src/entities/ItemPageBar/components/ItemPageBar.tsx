import React, { FC } from 'react';
import { UsedUserInfo } from '../../../shared';

import like from 'public/images/icons/like.svg';
import dislike from 'public/images/icons/dislike.svg';
import Image from 'next/image';

interface Props {
  title: string;
  createdAt: string;
  updatedAt: string;
  viewes: number;
  likes: number;
  dislikes: number;
}

const ItemPageBar: FC<Props> = ({ title, createdAt, updatedAt, viewes }) => {
  return (
    <div className="flex justify-between rounded-lg border-2 border-gray-300 p-5">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <UsedUserInfo
          createdAt={createdAt}
          updatedAt={updatedAt}
          viewes={viewes}
        />
      </div>
      <div className="flex gap-2">
        <div className="flex gap-1 items-center">
          <span className='text-2xl font-semibold'>5</span>
          <Image src={like} alt="like" />
        </div>

        <div className="flex gap-1 items-center">
          <span className='text-2xl font-semibold'>5</span>
          <Image src={dislike} alt="dislike" />
        </div>
      </div>
    </div>
  );
};

export default ItemPageBar;
