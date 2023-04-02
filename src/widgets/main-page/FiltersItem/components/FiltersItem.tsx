import { Card, CardBody, useMediaQuery } from '@chakra-ui/react';
import { Input } from 'antd';
import {
  CSSProperties,
  ChangeEvent,
  FC,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { CustomTag, useRequest, useTypedSelector } from '../../../../shared';
import {
  addFilterItem,
  deleteFilterItem,
  FilterItem,
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
  const activeItems = useTypedSelector(
    (state) => state.filters[contentName][name],
  );
  const [items, setItems] = useState<any[]>([]);
  const [allItems, setAllItems] = useState<any[]>([]);
  const { request } = useRequest(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await request(getItems, false, url);
    if (data) {
      setItems(data.slice(0, 10));
      setAllItems(data);
    }
  }

  const onSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;
    if (value) {
      setItems(() => {
        return allItems
          .filter((i: any) => {
            if (i?.name)
              return i.name.toLowerCase().includes(value.toLowerCase());
            if (i?.title)
              return i.title.toLowerCase().includes(value.toLowerCase());
            return true;
          })
          .slice(0, 10);
      });
    } else {
      setItems(allItems.slice(0, 10));
    }
  };

  const onTagSelect = (item: FilterItem) => {
    dispatch(
      addFilterItem({
        itemName: contentName,
        itemEntity: name,
        item,
      }),
    );
    const newItems = allItems.filter((i) => i.id !== item.id);
    setItems(newItems.slice(0, 10));
    setAllItems(newItems);
  };

  const onTagDelete = (item: FilterItem) => {
    dispatch(
      deleteFilterItem({
        itemName: contentName,
        itemEntity: name,
        item,
      }),
    );
    const newItems = allItems.concat([item]);
    setItems(newItems.slice(0, 10));
    setAllItems(newItems);
  };

  return (
    <Card className="mt-5 filter-item">
      <CardBody className="filter-item__body__with-padding">
        <h4 className="text-base md:text-center font-semibold">{title}</h4>
        <div className="pt-1 md:pt-3">
          {activeItems.map((item) => (
            <CustomTag
              key={item.id}
              className="m-0.5 cursor-pointer"
              label={item.name ?? item.title ?? ''}
              close
              onClose={() => onTagDelete(item)}
            />
          ))}
        </div>
      </CardBody>
      <CardBody
        className="border-t-2 border-gray-200 filter-item__body"
        style={{ paddingTop: 5 }}
      >
        <label htmlFor="items-search" className="text-sm text-gray-400">
          {label}
        </label>
        <Input
          id="items-search"
          placeholder="Поиск..."
          className="mt-0.5 mb-2"
          onChange={onSearch}
        />
        <div>
          {items.map((item) => (
            <CustomTag
              key={item.id}
              className="m-0.5 cursor-pointer"
              onClick={() => onTagSelect(item)}
              label={item.name ?? item.title}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default FiltersItem;
