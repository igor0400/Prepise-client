import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  title: string;
  link: string;
  onClick(): void;
}

const SearchItemCard: FC<Props> = ({ title, link, onClick }) => {
  return (
    <Link href={link}>
      <div
        className="p-3 hover:bg-gray-100 rounded-md shadow"
        onClick={onClick}
      >
        <h4 className="font-medium">{title}</h4>
      </div>
    </Link>
  );
};

export default SearchItemCard;
