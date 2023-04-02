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
import { UserFavourites } from '../../../../entities/User';
import classNames from 'classnames';

interface Props {
  filtersItem: FiltersStateItem;
  url: string;
  itemCard: {
    Component: FC<any>;
    link: string;
  };
  name: keyof FiltersState;
  favouriteSettings: {
    storeName: UserFavourites;
    dataUrl: string;
  };
}

const MainContentItems: FC<Props> = ({
  filtersItem,
  url,
  itemCard,
  name,
  favouriteSettings,
}) => {
  const [allItems, setAllItems] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [changeItems, setChangeItems] = useState(0);
  const { request, loading } = useRequest(false);
  const filters = useTypedSelector((state) => state.filters[name]);
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');
  const [isSmallerThan490] = useMediaQuery('(max-width: 490px)');
  const { Component: ItemCard, link } = itemCard;

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (changeItems !== 0) setItems(filterItems(allItems, filters));
  }, [filters, changeItems]);

  async function getData() {
    const data = await request(getItems, true, url);

    if (data) {
      const sortedData = data.sort((a: any, b: any) => b.id - a.id);
      setItems((state) => state.concat(sortedData));
      setAllItems((state) => state.concat(sortedData));
      setChangeItems((state) => state + 1);
    }
  }

  if (loading)
    return (
      <CenteredLoader
        className={classNames('', {
          'pb-32': !isSmallerThan1279,
          'mt-20': isSmallerThan1279,
        })}
        style={isSmallerThan1279 ? { height: 'fit-content' } : undefined}
      />
    );

  if (!items?.length) return <EmptyItems />;

  return (
    <Fade
      in={true}
      className={classNames('grid w-full auto-rows-min', {
        'gap-4': !isSmallerThan1279,
        'gap-2': isSmallerThan1279,
      })}
      style={
        !isSmallerThan490
          ? { gridTemplateColumns: 'repeat(auto-fit, 400px)' }
          : undefined
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
  );
};

export default MainContentItems;
