import type { SelectProps } from 'antd';

export const findOptions = (
  options: SelectProps['options'] | undefined,
  value: string,
) => {
  if (!options) return [];

  return options.filter((item) => {
    if (typeof item.value === 'string') {
      return item.value.toLowerCase().includes(value.toLowerCase());
    }

    return false;
  });
};
