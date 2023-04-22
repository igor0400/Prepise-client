import { FC } from 'react';
import { UserItems } from '../../../../entities/User';
import { useTypedSelector } from '../../../../shared';
import MainContentFilters from '../../MainContentFilters';
import MainContentItems from '../../MainContentItems';
import { FiltersState } from '../model/store/filtersSilce';
import { Scrollbars } from 'react-custom-scrollbars-2';

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
    storeName: UserItems;
    dataUrl: string;
  };
  itemsName: string;
}

const MainContentFrame: FC<Props> = (props) => {
  const { name, title, description } = props;
  const filters = useTypedSelector((state) => state.filters[name]);

  return (
    <div className="w-full">
      <div className="block xl:hidden">
        <h2 className="font-bold text-xl sm:text-2xl">{title}</h2>
        <p className="py-5 text-sm sm:text-base max-w-4xl">{description}</p>
      </div>

      <div className="w-full min-[1280px]:flex">
        <MainContentFilters name={name} />
        <Scrollbars
          autoHide
          style={{ width: '100%' }}
          autoHeight
          autoHeightMax={924}
        >
          <MainContentItems {...props} filtersItem={filters} />
        </Scrollbars>
      </div>
    </div>
  );
};

export default MainContentFrame;
