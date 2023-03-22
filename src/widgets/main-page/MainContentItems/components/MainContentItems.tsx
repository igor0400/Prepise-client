import { Fade } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';
import { CenteredLoader, useRequest } from '../../../../shared';
import { getItems } from '../lib/api/getItems';
import { FiltersStateItem } from '../../MainContentFrame';

interface Props {
  filters: FiltersStateItem;
  url: string;
  ItemCard: FC<any>;
}

const MainContentItems: FC<Props> = ({ filters, url, ItemCard }) => {
  const [items, setItems] = useState<any[]>([]);
  const { request, loading } = useRequest(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await request(getItems, true, url);
    if (data) {
      setItems((state) => state.concat(data.reverse()));
    }
  }

  if (loading) return <CenteredLoader className="pb-32" />;

  if (!items?.length) {
    return (
      <h3 className="text-xl font-bold flex justify-center mt-20 w-full">
        Элементов в выбранной категории пока нет
      </h3>
    );
  }

  return (
    <Fade
      in={true}
      className="grid gap-4 w-full auto-rows-min"
      style={{ gridTemplateColumns: 'repeat(auto-fit, 400px)' }}
    >
      {items.map((item, i) => (
        <ItemCard
          {...item}
          favouriteBtn={<FavouriteIconBtn {...item} />}
          activeTags={filters.tags}
          key={i}
        />
      ))}
    </Fade>
  );
};

export default MainContentItems;
