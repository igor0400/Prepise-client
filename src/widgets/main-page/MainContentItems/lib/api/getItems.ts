import { api } from '../../../../../shared';

export async function getItems(url: string) {
  const data: any[] = await api.get(url).json();
  return data;
}
