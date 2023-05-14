import { useEffect, useState } from 'react';
import { defaultGet, useRequest } from '../../../../shared';

type Names = 'questions' | 'blocks' | 'tests' | 'testBlocks' | 'posts';

const urls: { [key: string]: string } = {
  questions: 'questions/default',
  blocks: 'blocks/default',
  tests: 'blocks/test',
  testBlocks: 'blocks/test',
  posts: 'posts/users',
};

export const useGetUserItems = (storeName: Names, userId: number) => {
  const [items, setItems] = useState<any[]>([]);
  const { request, loading } = useRequest(false, false, true);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    const data = await request(
      defaultGet,
      true,
      `${urls[storeName]}?authorId=${userId}`,
    );
    console.log(data);
    
    if (data) setItems(data);
  }

  return { items, loading };
};
