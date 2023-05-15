import { FiltersStateItem } from '../../../../widgets/main-page/MainContentFrame';

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
    const names = companies.map((i) => i.title);

    result = result.filter((item) => {
      if (names.includes(item?.defaultQuestionInfo?.interviewCompany))
        return true;

      return false;
    });
  }

  if (sections.length) {
    const names = sections.map((i) => i.title);

    result = result.filter((item) => {
      if (names.includes(item?.section)) return true;

      return false;
    });
  }

  if (positions.length) {
    const names = positions.map((i) => i.title);

    result = result.filter((item) => {
      if (names.includes(item?.interviewPosition)) return true;

      return false;
    });
  }

  return result.sort((a, b) => b.id - a.id);
};
