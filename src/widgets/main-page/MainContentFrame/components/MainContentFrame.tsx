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
  description: string;
  url: string;
  itemCard: {
    Component: FC<any>;
    link: string;
  };
  favouriteSettings: {
    storeName: UserFavourites;
    dataUrl: string;
  };
}

const MainContentFrame: FC<Props> = (props) => {
  const { name, title, description } = props;
  const filters = useTypedSelector((state) => state.filters[name]);
  const [isSmallerThan1115] = useMediaQuery('(max-width: 1115px)');

  return (
    <div
      className={classNames('w-full', {
        flex: !isSmallerThan1115,
      })}
    >
      {isSmallerThan1115 && (
        <>
          <h2 className="font-bold text-xl sm:text-2xl">{title}</h2>
          <p className="py-5 text-sm sm:text-base max-w-4xl">{description}</p>
        </>
      )}
      <MainContentFilters name={name} />
      <MainContentItems {...props} filtersItem={filters} />
    </div>
  );
};

export default MainContentFrame;
