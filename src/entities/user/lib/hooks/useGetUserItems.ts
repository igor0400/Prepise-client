import { useCallback, useEffect, useState } from 'react';
import { defaultGet, useRequest } from '../../../../shared';
import { loadItemsLength } from '../../config';

type Names = 'questions' | 'blocks' | 'tests' | 'testBlocks' | 'posts';

const urls: { [key: string]: string } = {
  questions: 'questions/default',
  blocks: 'blocks/default',
  tests: 'questions/test',
  testBlocks: 'blocks/test',
  posts: 'posts/users',
};

export const useGetUserItems = (storeName: Names, userId: number) => {
  const { request, loading } = useRequest(false);
  const { request: moreRequest, loading: moreLoading } = useRequest(false);
  const [items, setItems] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);
  const [moreDisabled, setMoreDisabled] = useState(false);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    const data = await request(
      defaultGet,
      true,
      `${urls[storeName]}?authorId=${userId}&limit=${loadItemsLength}`,
    );

    if (data) {
      setItems(data);
      setOffset(loadItemsLength);

      if (data?.length < loadItemsLength) setMoreDisabled(true);
    }
  }

  const getMoreItems = useCallback(async () => {
    const data = await moreRequest(
      defaultGet,
      true,
      `${urls[storeName]}?authorId=${userId}&limit=${loadItemsLength}&offset=${offset}`,
    );

    const isDataSmall = data?.length < loadItemsLength;

    if (data) {
      setItems((state) => [...state, ...data]);

      if (isDataSmall) {
        setOffset((state) => state + data.length);
        setMoreDisabled(true);
      } else {
        setOffset((state) => state + loadItemsLength);
      }
    }
  }, [offset]);

  return { items, loading, moreLoading, moreDisabled, getMoreItems };
};
