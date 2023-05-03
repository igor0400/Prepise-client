import { Fade, useMediaQuery } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';
import {
  CenteredLoader,
  EmptyItems,
  useRequest,
  useTypedSelector,
} from '../../../../shared';
import { getItems } from '../lib/api/getItems';
import { FiltersState, FiltersStateItem } from '../../MainContentFrame';
import { filterItems } from '../lib/assets/filterItems';
import { UserItems } from '../../../../entities/User';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { setItemData, changeItemsData } from '../../../../entities/main-page';
import { useDispatch } from 'react-redux';

interface Props {
  filtersItem: FiltersStateItem;
  url: string;
  itemCard: {
    Component: FC<any>;
    link: string;
  };
  name: keyof Omit<FiltersState, 'tags' | 'users' | 'companies'>;
  favouriteSettings: {
    storeName: UserItems;
    dataUrl: string;
  };
  itemsName: string;
}

const MainContentItems: FC<Props> = ({
  filtersItem,
  url,
  itemCard,
  name,
  favouriteSettings,
  itemsName,
}) => {
  const { request, loading } = useRequest(false);
  const filters = useTypedSelector((state) => state.filters[name]);
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');
  const [isSmallerThan1650] = useMediaQuery('(max-width: 1650px)');
  const [isSmallerThan490] = useMediaQuery('(max-width: 490px)');
  const { Component: ItemCard, link } = itemCard;
  const { items, allItems } = useTypedSelector((state) => state.mainPage[name]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items) {
      getData();
    }
  }, []);

  useEffect(() => {
    if (allItems) {
      dispatch(
        changeItemsData({
          name,
          data: filterItems(allItems, filters),
        }),
      );
    }
  }, [filters]);

  async function getData() {
    const data = await request(getItems, true, url);

    if (data) {
      dispatch(
        setItemData({ name, data: filterItems(data, filters), allData: data }),
      );
    }
  }

  if (loading)
    return (
      <CenteredLoader
        className="max-[1279px]:mt-28 min-[1279px]:pb-32"
        style={isSmallerThan1279 ? { height: 'fit-content' } : undefined}
      />
    );

  if (!items?.length) return <EmptyItems itemsName={itemsName} />;

  return (
    <Scrollbars autoHide autoHeight autoHeightMax={1000}>
      <Fade
        in
        className="grid w-full auto-rows-min gap-2 sm:gap-3 2xl:gap-4 pt-0.5 pl-0.5 pb-3 pr-3"
        style={
          isSmallerThan490
            ? undefined
            : {
                gridTemplateColumns: `repeat(auto-fill, minmax(${
                  isSmallerThan1650 ? 300 : 360
                }px, 1fr))`,
              }
        }
      >
        {items.map((item) => (
          <ItemCard
            link={link}
            {...item}
            favouriteBtn={
              <FavouriteIconBtn
                size={isSmallerThan1279 ? 'small' : 'big'}
                item={item}
                {...favouriteSettings}
              />
            }
            activeTags={filtersItem.tags}
            size={isSmallerThan1279 ? 'small' : 'big'}
            key={item.id}
          />
        ))}
      </Fade>
    </Scrollbars>
  );
};

export default MainContentItems;
