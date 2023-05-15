import { Fade, useMediaQuery } from '@chakra-ui/react';
import { Input } from 'antd';
import classNames from 'classnames';
import { ChangeEvent, FC, useState } from 'react';
import { UserItems } from '../../../../entities/User';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';
import {
  CenteredLoader,
  EmptyItems,
  useTypedSelector,
} from '../../../../shared';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Scrollbars from 'react-custom-scrollbars-2';
import {
  changeItemsData,
  getFilteredItems,
  MainPageState,
} from '../../../../entities/main-page';
import { useDispatch } from 'react-redux';
import { addSimpleFilterItem } from '../../MainContentFrame';
import { useGetItems } from '../../../../entities/main-page';
import ShowMoreBtn from '../../../../entities/ShowMoreBtn';

interface Props {
  name: keyof Omit<
    MainPageState,
    'questions' | 'blockQuestions' | 'tests' | 'blockTests'
  >;
  title: string;
  description?: string;
  ItemCard: FC<any>;
  itemsName: string;
  itemsUrl: string;
  favouriteSettings: {
    storeName: UserItems;
    dataUrl: string;
  };
  searchPlaceholder: string;
}

const MainEntityFrame: FC<Props> = ({
  name,
  title,
  description,
  ItemCard,
  favouriteSettings,
  itemsName,
  itemsUrl,
  searchPlaceholder,
}) => {
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');
  const [isSmallerThan380] = useMediaQuery('(max-width: 380px)');
  const [showDescr, setShowDescr] = useState(false);
  const filter = useTypedSelector((state) => state.filters[name]);
  const dispatch = useDispatch();
  const { items, allItems, loading, moreLoading, moreDisabled, getMoreItems } =
    useGetItems(name, itemsUrl);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;

    if (!allItems) return;

    if (value) {
      dispatch(addSimpleFilterItem({ itemName: name, value }));
      dispatch(
        changeItemsData({
          name,
          data: getFilteredItems(allItems, value).slice(0, 20),
        }),
      );
    } else {
      dispatch(addSimpleFilterItem({ itemName: name, value: '' }));
      dispatch(changeItemsData({ name, data: allItems.slice(0, 20) }));
    }
  };

  return (
    <>
      <div className="pb-4">
        <div
          className="flex items-center gap-0.5 cursor-pointer w-fit"
          onClick={() => setShowDescr((state) => !state)}
        >
          <h2 className="font-bold text-xl sm:text-2xl">{title}</h2>
          <HelpOutlineIcon className="mt-1 text-xl sm:text-2xl" />
        </div>
        {showDescr && (
          <Fade in>
            <p className="pt-1.5 sm:pt-3 text-sm sm:text-base max-w-4xl">
              {description}
            </p>
          </Fade>
        )}
      </div>

      <Input
        placeholder={searchPlaceholder}
        className="w-64"
        onChange={onSearch}
        defaultValue={filter}
      />

      {loading ? (
        <CenteredLoader className="mt-28" style={{ height: 'fit-content' }} />
      ) : !items || items?.length < 1 ? (
        <EmptyItems itemsName={itemsName} />
      ) : (
        <Scrollbars autoHide autoHeight autoHeightMax={1000}>
          <div className="pl-0.5 pb-3 pr-3">
            <Fade
              in
              className={classNames('pt-3 grid w-full', {
                'gap-2': isSmallerThan380,
                'gap-3': !isSmallerThan380,
              })}
              style={
                !isSmallerThan380
                  ? { gridTemplateColumns: 'repeat(auto-fit, 300px)' }
                  : undefined
              }
            >
              {items.map((item: any) => (
                <ItemCard
                  size={isSmallerThan380 ? 'small' : 'big'}
                  key={item.id}
                  item={item}
                  favouriteBtn={
                    <FavouriteIconBtn
                      size={isSmallerThan1279 ? 'small' : 'big'}
                      item={item}
                      {...favouriteSettings}
                    />
                  }
                />
              ))}
            </Fade>
            {!moreDisabled && (
              <ShowMoreBtn onClick={getMoreItems} loading={moreLoading} />
            )}
          </div>
        </Scrollbars>
      )}
    </>
  );
};

export default MainEntityFrame;
