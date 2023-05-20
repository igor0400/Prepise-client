import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { defaultGet, useRequest, useTypedSelector } from '../../../../shared';
import { loadItemsLength } from '../../config';
import { ProfileState, setItemData, updateItemData } from '../../../profile';

const urls: { [key: string]: string } = {
  questions: 'questions/default',
  blocks: 'blocks/default',
  tests: 'blocks/test',
  testBlocks: 'blocks/test',
  posts: 'posts/users',
};

export const useGetPersonalItems = (
  name: keyof Omit<ProfileState, 'navbar'>,
) => {
  const { items, allItems, offset, moreDisabled }: any = useTypedSelector(
    (state) => state.profile[name],
  );
  const { request, loading } = useRequest(false);
  const { request: moreRequest, loading: moreLoading } = useRequest(false);
  const dispatch = useDispatch();
  const url = urls[name];

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

    if (data) {
      dispatch(
        setItemData({
          name,
          data: data,
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

    const isDataSmall = data?.length < loadItemsLength;

    if (data) {
      dispatch(
        updateItemData({
          name,
          data: data,
          allData: data,
          offset: isDataSmall ? offset + data.length : offset + loadItemsLength,
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
