import { BlockType } from '../../../Block';
import { QuestionType } from '../../../Question';

export const getUserStat = (items: Array<QuestionType | BlockType>) => {
  let viewes = 0;
  let likes = 0;

  for (let item of items) {
    viewes += item.viewes;
    likes += item.likes;
  }

  return {
    viewes,
    likes,
  };
};
