import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItemsData, changeItemsData } from '../../model/store/searchSlice';
import { useRequest, useTypedSelector } from '../../../../shared';
import { SearchStateKeys } from '../../model/store/searchSlice';
import { getItems } from '../api/getItems';

export const useGetItems = <T>(url: string, name: SearchStateKeys) => {
  const { value } = useTypedSelector((state) => state.search);
  const itemsData = useTypedSelector((state) => state.search[name]);
  const { request, loading } = useRequest(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!itemsData.allItems.length) {
      getData();
    }
  }, []);

  useEffect(() => {
    const filteredItems = [...itemsData.allItems].filter((i: any) =>
      i.title.includes(value),
    );

    dispatch(changeItemsData({ data: filteredItems, name }));
  }, [value]);

  async function getData() {
    const data = (await request(getItems, false, url)) as T[];
    if (data) dispatch(setItemsData({ data, name }));
  }

  return { items: itemsData.items, loading };
};
