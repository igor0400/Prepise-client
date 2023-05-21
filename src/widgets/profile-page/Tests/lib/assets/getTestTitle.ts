import { BlockType } from '../../../../../entities/Block';
import { QuestionType } from '../../../../../entities/Question';

export const getTestTitle = (
  items: Array<QuestionType | BlockType>,
  id: number,
) => {
  const item = items.filter((i) => i.id === id)[0];

  const title = item?.title;

  if (!title) return String(id);
  if (title.length <= 13) return title;

  return `${item?.title?.slice(0, 10)}...`;
};
