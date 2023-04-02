import { Fade, useMediaQuery } from '@chakra-ui/react';
import { Input } from 'antd';
import classNames from 'classnames';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { UserFavourites } from '../../../../entities/User';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';
import { useRequest, CenteredLoader, EmptyItems } from '../../../../shared';
import { getData } from '../lib/api/getData';

interface Props {
  title: string;
  description?: string;
  ItemCard: FC<any>;
  itemsUrl: string;
  favouriteSettings: {
    storeName: UserFavourites;
    dataUrl: string;
  };
  searchPlaceholder: string;
}

const MainEntityFrame: FC<Props> = ({
  title,
  description,
  ItemCard,
  favouriteSettings,
  itemsUrl,
  searchPlaceholder,
}) => {
  const [allItems, setAllItems] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const { request, loading } = useRequest(false);
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');
  const [isSmallerThan380] = useMediaQuery('(max-width: 380px)');

  useEffect(() => {
    setData();
  }, []);

  async function setData() {
    const data = await request(getData, true, itemsUrl);

    if (data) {
      setAllItems(data);
      setItems(data.slice(0, 100));
    }
  }

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;

    if (value) {
      const filteredItems = allItems.filter((i: any) =>
        i.name.toLowerCase().includes(value.toLowerCase()),
      );

      setItems(filteredItems.slice(0, 100));
    } else {
      setItems(allItems.slice(0, 100));
    }
  };

  return (
    <>
      <h2 className="font-bold text-xl sm:text-2xl">{title}</h2>
      {description && (
        <p className="pt-5 text-sm sm:text-base max-w-4xl">{description}</p>
      )}

      <Input
        placeholder={searchPlaceholder}
        className="w-64 mt-8"
        onChange={onSearch}
      />

      {loading ? (
        <CenteredLoader className="mt-20" style={{ height: 'fit-content' }} />
      ) : !items.length ? (
        <EmptyItems />
      ) : (
        <Fade
          in={true}
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
      )}
    </>
  );
};

export default MainEntityFrame;
