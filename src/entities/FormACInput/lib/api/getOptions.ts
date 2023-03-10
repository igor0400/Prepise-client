import { secureApi } from '../../../../shared';

export async function getOptions(url: string) {
  const options: any = await secureApi().get(url).json();
  if (options) {
    return options.map((i: any) => ({
      value: i.title,
    }));
  }

  return [];
}
