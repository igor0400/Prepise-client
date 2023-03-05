import { secureApi } from '../../../../shared';

export async function getOptions(url: string) {
  const options = await secureApi().get(url).json();
  return options;
}
