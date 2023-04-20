import { secureApi } from '../../../../../shared';

export const postReply = async (url: string, text: string) => {
  const data = await secureApi().post(url, { json: { text } }).json();

  return data;
};
