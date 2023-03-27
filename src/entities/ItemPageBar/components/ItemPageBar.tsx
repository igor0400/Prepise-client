import React, { FC } from 'react';

interface Props {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  viewes: number;
  likes: number;
  dislikes: number;
}

const ItemPageBar: FC<Props> = ({ title }) => {
  return (
    <div className="rounded-lg border-2 border-gray-300 p-5">
      <h1 className='text-2xl font-semibold'>{title}</h1>
    </div>
  );
};

export default ItemPageBar;
