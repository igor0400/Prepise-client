import React, { FC } from 'react';
import { useGetItems } from '../lib/hooks/useGetItems';
import SearchItemCard from '../../SearchItemCard';
import { SearchStateKeys } from '../model/store/searchSlice';
import { Spinner } from '@chakra-ui/react';

interface Props {
  onClose(): void;
  getUrl: string;
  name: SearchStateKeys;
  redirectUrl: string;
}

const Items: FC<Props> = ({ onClose, getUrl, name, redirectUrl }) => {
  const { items, loading } = useGetItems(getUrl, name);

  if (loading) {
    return (
      <Spinner
        size="lg"
        className="flex mx-auto my-2"
        thickness="3px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
      />
    );
  }

  if (!items.length) {
    return (
      <p className="text-center font-semibold text-gray-500">
        Ничего не найдено
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {items.slice(0, 10).map((item) => (
        <SearchItemCard
          title={item.title}
          link={`/${redirectUrl}/${item.id}`}
          onClick={onClose}
        />
      ))}
    </div>
  );
};

export default Items;
