import fileDownload from 'js-file-download';
import ky from 'ky';

export const handleDownload = async (
  url: string,
  filename: string,
  toast: Function,
) => {
  try {
    const data: any = await ky.get(url).blob();
    fileDownload(data, filename);
  } catch (e) {
    toast({
      description: 'Ошибка скачивания',
      status: 'error',
      duration: 2000,
    });
  }
};
