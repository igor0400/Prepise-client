import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export const getFileUrl = (url: string) => {
  return `${serverRuntimeConfig?.serverUrl ?? 'https://api.prepise.ru'}${url}`;
};
