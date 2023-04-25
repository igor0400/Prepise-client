import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from '../api/default-requests';
import { useRequest } from './useRequest';

export const useGetInfoById = <T>(startUrl: string) => {
  const { request, loading } = useRequest(false);
  const [data, setData] = useState<T | null>(null);
  const router = useRouter();

  useEffect(() => {
    getData();
  }, [router]);

  async function getData() {
    const id = router?.query?.id;
    if (!id) return;

    const value = await request(async () => {
      const args = await api.get(`${startUrl}/${id}`).json();
      return args;
    }, false);

    if (value) setData(value);
  }

  return { data, loading };
};
