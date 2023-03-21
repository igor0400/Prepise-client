import { Card, CardBody, Tag, TagLabel } from '@chakra-ui/react';
import { Input } from 'antd';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRequest } from '../../../../shared';
import {
  addFilterItem,
  FiltersState,
  FiltersStateItem,
} from '../../MainContentFrame';
import { getItems } from '../lib/api/getItems';

interface Props {
  title: string;
  label: string;
  url: string;
  name: keyof FiltersStateItem;
  contentName: keyof FiltersState;
}

const FiltersItem: FC<Props> = ({ title, label, url, name, contentName }) => {
  const [items, setItems] = useState<any[]>([]);
  const [allItems, setAllItems] = useState<any[]>([]);
  const { request } = useRequest(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await request(getItems, true, url);
    if (data) {
      setItems(data);
      setAllItems(data);
    }
  }

  // сделать поиск по всем тегам из бд при поиске

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;
    if (value) {
      setItems(() => {
        return allItems.filter((i: any) => {
          if (i?.name) return i.name.includes(value);
          if (i?.title) return i.title.includes(value);
        });
      });
    } else {
      setItems(allItems);
    }
  };

  const onTagSelect = (id: number) => {
    dispatch(
      addFilterItem({
        itemName: contentName,
        itemEntity: name,
        item: String(id),
      }),
    );
  };

  return (
    <Card className="mt-5">
      <CardBody>
        <h4 className="text-center font-semibold">{title}</h4>
      </CardBody>
      <CardBody
        className="border-t-2 border-gray-200"
        style={{ paddingTop: 5 }}
      >
        <label htmlFor="items-search" className="text-sm">
          {label}
        </label>
        <Input
          id="items-search"
          placeholder="Искать"
          className="mt-0.5 mb-2"
          onChange={onSearch}
        />
        <div>
          {items.map((item: any) => (
            <Tag
              size="md"
              key={item.id}
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              className="m-0.5 cursor-pointer"
              style={{ background: 'rgba(27, 165, 33, 0.1)', color: '#000' }}
              onClick={() => onTagSelect(item.id)}
            >
              <TagLabel>{item.name ?? item.title}</TagLabel>
            </Tag>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default FiltersItem;
