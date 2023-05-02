import { FC, useState } from 'react';
import { UserItems } from '../../../../entities/User';
import { useTypedSelector } from '../../../../shared';
import MainContentFilters from '../../MainContentFilters';
import MainContentItems from '../../MainContentItems';
import { FiltersState } from '../model/types/store';
import { Fade } from '@chakra-ui/react';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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
  const [showDescr, setShowDescr] = useState(false);

  return (
    <>
      <div className="xl:hidden pb-4">
        <div
          className="flex items-center gap-0.5 cursor-pointer w-fit"
          onClick={() => setShowDescr((state) => !state)}
        >
          <h2 className="font-bold text-xl sm:text-2xl">{title}</h2>
          <HelpOutlineIcon className="mt-1 text-xl sm:text-2xl" />
        </div>
        {showDescr && (
          <Fade in>
            <p className="pt-1.5 pb-1 sm:pt-3 text-sm sm:text-base max-w-4xl">
              {description}
            </p>
          </Fade>
        )}
      </div>

      <div className="min-[1280px]:flex">
        <MainContentFilters name={name} />
        <MainContentItems {...props} filtersItem={filters} />
      </div>
    </>
  );
};

export default MainContentFrame;
