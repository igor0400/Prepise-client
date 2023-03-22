import { FiltersStateItem } from '../../../MainContentFrame';

export const filterItems = (items: any[], filters: FiltersStateItem) => {
  let result = [...items];
  const { tags, companies, sections, positions } = filters;

  if (tags.length) {
    const tagsIds = tags.map((i) => i.id);

    result = result.filter((item) => {
      let isValid = false;
      for (let tag of item.tags) {
        if (tagsIds.includes(tag.id)) isValid = true;
      }
      return isValid;
    });
  }

  if (companies.length) {
  }

  return result.sort((a, b) => b.id - a.id);
};

function getFilteredItemsByGroup(result: any[], filtersItem: any[]) {
  const ids = filtersItem.map((i) => i.id);

  return result.filter((item) => {
    let isValid = false;
    for (let tag of item.tags) {
      if (ids.includes(tag.id)) isValid = true;
    }
    return isValid;
  });
}
