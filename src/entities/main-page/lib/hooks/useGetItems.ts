import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { defaultGet, useRequest, useTypedSelector } from '../../../../shared';
import { filterItems } from '../assets/filterItems';
import { getFilteredItems } from '../assets/getFilteredItems';
import { setItemData, updateItemData } from '../../model/store/mainPageSlice';
import { MainPageState } from '../../model/types/store';

export const useGetItems = (name: keyof MainPageState, url: string) => {
  const { items, allItems, offset, moreDisabled }: any = useTypedSelector(
    (state) => state.mainPage[name],
  );
  const filters = useTypedSelector((state) => state.filters[name]);
  const { request, loading } = useRequest(false);
  const { request: moreRequest, loading: moreLoading } = useRequest(false);
  const dispatch = useDispatch();

  const itemsPadding = 20;

  useEffect(() => {
    if (!items) {
      getData();
    }
  }, []);

  async function getData() {
    const data = await request(
      defaultGet,
      true,
      `${url}?limit=${itemsPadding}`,
    );
    const filteredItems =
      typeof filters === 'string'
        ? getFilteredItems(data, filters).slice(0, itemsPadding)
        : filterItems(data, filters);

    if (data) {
      dispatch(
        setItemData({
          name,
          data: filteredItems,
          allData: data,
          offset: itemsPadding,
          moreDisabled: data?.length < itemsPadding ? true : false,
        }),
      );
    }
  }

  const getMoreItems = useCallback(async () => {
    const data = await moreRequest(
      defaultGet,
      true,
      `${url}?offset=${offset}&limit=${itemsPadding}`,
    );
    const filteredItems =
      typeof filters === 'string'
        ? getFilteredItems(data, filters).slice(0, itemsPadding)
        : filterItems(data, filters);

    const isDataSmall = data?.length < itemsPadding;

    if (data) {
      dispatch(
        updateItemData({
          name,
          data: filteredItems,
          allData: data,
          offset: isDataSmall ? offset + data.length : offset + itemsPadding,
          moreDisabled: isDataSmall ? true : false,
        }),
      );
    }
  }, [offset]);

  return {
    allItems,
    items,
    loading,
    moreLoading,
    moreDisabled,
    getMoreItems,
  };
};
