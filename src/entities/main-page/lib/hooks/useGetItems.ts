import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { defaultGet, useRequest, useTypedSelector } from '../../../../shared';
import { filterItems } from '../assets/filterItems';
import { getFilteredItems } from '../assets/getFilteredItems';
import { setItemData, updateItemData } from '../../model/store/mainPageSlice';
import { MainPageState } from '../../model/types/store';
import { loadItemsLength } from '../../config';

export const useGetItems = (name: keyof MainPageState, url: string) => {
  const { items, allItems, offset, moreDisabled }: any = useTypedSelector(
    (state) => state.mainPage[name],
  );
  const filters = useTypedSelector((state) => state.filters[name]);
  const { request, loading } = useRequest(false);
  const { request: moreRequest, loading: moreLoading } = useRequest(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items) {
      getData();
    }
  }, []);

  async function getData() {
    const data = await request(
      defaultGet,
      true,
      `${url}?limit=${loadItemsLength}`,
    );
    const filteredItems =
      typeof filters === 'string'
        ? getFilteredItems(data, filters).slice(0, loadItemsLength)
        : filterItems(data, filters);

    if (data) {
      dispatch(
        setItemData({
          name,
          data: filteredItems,
          allData: data,
          offset: loadItemsLength,
          moreDisabled: data?.length < loadItemsLength ? true : false,
        }),
      );
    }
  }

  const getMoreItems = useCallback(async () => {
    const data = await moreRequest(
      defaultGet,
      true,
      `${url}?offset=${offset}&limit=${loadItemsLength}`,
    );
    const filteredItems =
      typeof filters === 'string'
        ? getFilteredItems(data, filters).slice(0, loadItemsLength)
        : filterItems(data, filters);

    const isDataSmall = data?.length < loadItemsLength;

    if (data) {
      dispatch(
        updateItemData({
          name,
          data: filteredItems,
          allData: data,
          offset: isDataSmall ? offset + data.length : offset + loadItemsLength,
          moreDisabled: isDataSmall ? true : false,
        }),
      );
    }
  }, [offset, filters]);

  return {
    allItems,
    items,
    loading,
    moreLoading,
    moreDisabled,
    getMoreItems,
  };
};
