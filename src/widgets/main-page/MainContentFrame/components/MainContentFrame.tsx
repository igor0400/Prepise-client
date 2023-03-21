import { FC } from 'react';
import { useTypedSelector } from '../../../../shared';
import MainContentFilters from '../../MainContentFilters';
import MainContentItems from '../../MainContentItems';
import { FiltersState } from '../model/store/filtersSilce';

interface Props {
  name: keyof FiltersState;
  url: string;
  ItemCard: FC<any>;
}

const MainContentFrame: FC<Props> = ({ name, url, ItemCard }) => {
  const filters = useTypedSelector((state) => state.filters[name]);

  return (
    <div className="flex w-full">
      <MainContentFilters name={name} />
      <MainContentItems filters={filters} url={url} ItemCard={ItemCard} />
    </div>
  );
};

export default MainContentFrame;
