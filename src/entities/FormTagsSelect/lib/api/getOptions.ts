import { api } from '../../../../shared';

interface DataType {
  authorId: number;
  createdAt: Date;
  description: string;
  followers: number;
  id: number;
  name: string;
  updatedAt: Date;
  used: number;
}

export const getOptions = async (url: string) => {
  const options: DataType[] = await api.get(url).json();

  return options.map((item) => ({
    value: `${item?.name} ${item?.id}`,
    label: item?.name,
  }));
};
