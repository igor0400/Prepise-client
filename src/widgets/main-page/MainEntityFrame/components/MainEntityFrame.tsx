import { Fade } from '@chakra-ui/react';
import { Input } from 'antd';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { UserFavourites } from '../../../../entities/User';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';
import { useRequest, CenteredLoader } from '../../../../shared';
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
      <h2 className="font-bold text-2xl">{title}</h2>
      {description && <p className="pt-5 max-w-4xl">{description}</p>}

      <Input
        placeholder={searchPlaceholder}
        className="w-64 mt-8"
        onChange={onSearch}
      />

      {loading ? (
        <CenteredLoader className="mt-20" style={{ height: 'fit-content' }} />
      ) : !items.length ? (
        <h3 className="text-xl font-semibold flex justify-center mt-10 w-full">
          Список элементов пуст
        </h3>
      ) : (
        <Fade
          in={true}
          className="pt-5 grid gap-3 w-full"
          style={{ gridTemplateColumns: 'repeat(auto-fit, 300px)' }}
        >
          {items.map((item: any) => (
            <ItemCard
              key={item.id}
              item={item}
              favouriteBtn={
                <FavouriteIconBtn item={item} {...favouriteSettings} />
              }
            />
          ))}
        </Fade>
      )}
    </>
  );
};

export default MainEntityFrame;
