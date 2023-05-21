import { parseReplyText, ReplyType } from '../../../../../entities/Reply';

export const getReplyTitle = (items: Array<ReplyType>, id: number) => {
  const item = items.filter((i: ReplyType) => i.id === id)[0];

  const title = parseReplyText(item?.text ?? '');

  if (!item?.text) return String(id);
  if (title.length <= 13) return title;

  return `${title.slice(0, 10)}...`;
};
