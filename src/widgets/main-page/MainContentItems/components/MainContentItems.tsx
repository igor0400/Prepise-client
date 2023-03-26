import { Fade, useMediaQuery } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';
import {
  CenteredLoader,
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
  ItemCard: FC<any>;
  name: keyof FiltersState;
  favouriteSettings: {
    storeName: UserFavourites;
    dataUrl: string;
  };
}

const MainContentItems: FC<Props> = ({
  filtersItem,
  url,
  ItemCard,
  name,
  favouriteSettings,
}) => {
  const [allItems, setAllItems] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [changeItems, setChangeItems] = useState(0);
  const { request, loading } = useRequest(false);
  const filters = useTypedSelector((state) => state.filters[name]);
  const [isSmallerThan980] = useMediaQuery('(max-width: 980px)');
  const [isSmallerThan490] = useMediaQuery('(max-width: 490px)');

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

  if (loading) return <CenteredLoader className="pb-32" />;

  if (!items?.length) {
    return (
      <h3 className="text-xl font-bold flex justify-center mt-20 w-full">
        Список элементов пуст
      </h3>
    );
  }

  return (
    <Fade
      in={true}
      className={classNames('grid w-full auto-rows-min', {
        'gap-4': !isSmallerThan980,
        'gap-2': isSmallerThan980,
      })}
      style={
        !isSmallerThan490
          ? { gridTemplateColumns: 'repeat(auto-fit, 400px)' }
          : undefined
      }
    >
      {items.map((item) => (
        <ItemCard
          {...item}
          favouriteBtn={
            <FavouriteIconBtn
              size={isSmallerThan980 ? 'small' : 'big'}
              item={item}
              {...favouriteSettings}
            />
          }
          activeTags={filtersItem.tags}
          size={isSmallerThan980 ? 'small' : 'big'}
          key={item.id}
        />
      ))}
    </Fade>
  );
};

export default MainContentItems;
