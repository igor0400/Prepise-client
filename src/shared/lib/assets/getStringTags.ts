import { TagType } from '../../../entities/Tag';
import { sliceText } from './sliceText';

export const getStringTags = (tags: TagType[], length: number) => {
  let result = '';

  for (let i in tags) {
    const name = tags[i]?.name;

    result += name;
    if (+i + 1 !== tags.length) result += ', ';
  }

  return sliceText(result, length);
};
