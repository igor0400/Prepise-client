import React, { FC } from 'react';

interface Props {
  count: number;
  title: string;
}

const Card: FC<Props> = ({ count, title }) => {
  return (
    <div
      className="p-4 flex flex-col justify-center items-center bg-gray-100 rounded-md min-w-[150px]"
      style={{
        filter: 'drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2))',
      }}
    >
      <p className="font-bold text-lg">{count}</p>
      <hr className="my-1 border-t-2 w-14" style={{ borderColor: '#C9C9C9' }} />
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default Card;
