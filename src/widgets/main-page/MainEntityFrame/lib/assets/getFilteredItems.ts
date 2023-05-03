export const getFilteredItems = (items: any[], value: string) => {
  return items.filter((i) =>
    i.name.toLowerCase().includes(value.toLowerCase()),
  );
};
