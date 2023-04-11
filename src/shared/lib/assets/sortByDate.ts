interface Item {
  createdAt: string;
}

export const sortByDate = <T extends Item>(
  items: T[],
  type: 'newest' | 'oldest',
) => {
  if (type === 'newest') {
    return items.sort((a, b) => toISO(b.createdAt) - toISO(a.createdAt));
  } else {
    return items.sort((a, b) => toISO(a.createdAt) - toISO(b.createdAt));
  }
};

function toISO(date: string) {
  return Date.parse(new Date(date).toISOString());
}
