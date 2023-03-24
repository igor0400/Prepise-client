import { FC } from 'react';
import { UserFavourites } from '../../../../entities/User';
import { useTypedSelector } from '../../../../shared';
import MainContentFilters from '../../MainContentFilters';
import MainContentItems from '../../MainContentItems';
import { FiltersState } from '../model/store/filtersSilce';

interface Props {
  name: keyof FiltersState;
  url: string;
  ItemCard: FC<any>;
  favouriteSettings: {
    storeName: UserFavourites;
    dataUrl: string;
  };
}

const MainContentFrame: FC<Props> = (props) => {
  const { name } = props;
  const filters = useTypedSelector((state) => state.filters[name]);

  return (
    <div className="flex w-full">
      <MainContentFilters name={name} />
      <MainContentItems {...props} filtersItem={filters} />
    </div>
  );
};

export default MainContentFrame;
