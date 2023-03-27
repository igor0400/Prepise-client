import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';
import { FC } from 'react';
import { UserFavourites } from '../../../../entities/User';
import { useTypedSelector } from '../../../../shared';
import MainContentFilters from '../../MainContentFilters';
import MainContentItems from '../../MainContentItems';
import { FiltersState } from '../model/store/filtersSilce';

interface Props {
  name: keyof FiltersState;
  title: string;
  url: string;
  ItemCard: FC<any>;
  favouriteSettings: {
    storeName: UserFavourites;
    dataUrl: string;
  };
}

const MainContentFrame: FC<Props> = (props) => {
  const { name, title } = props;
  const filters = useTypedSelector((state) => state.filters[name]);
  const [isSmallerThan980] = useMediaQuery('(max-width: 980px)');

  return (
    <div
      className={classNames('w-full', {
        flex: !isSmallerThan980,
      })}
    >
      {isSmallerThan980 && <h2 className="font-bold text-xl sm:text-2xl pb-5">{title}</h2>}
      <MainContentFilters name={name} />
      <MainContentItems {...props} filtersItem={filters} />
    </div>
  );
};

export default MainContentFrame;
