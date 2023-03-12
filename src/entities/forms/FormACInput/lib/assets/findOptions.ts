export const findOptions = (
  options: {
    value: string;
  }[],
  value: string,
) => {
  return options.filter((item) =>
    item.value.toLowerCase().includes(value.toLowerCase()),
  );
};
