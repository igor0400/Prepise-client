import fileDownload from 'js-file-download';
import ky from 'ky';

export const handleDownload = async (url: string, filename: string) => {
  const data: any = await ky.get(url).blob();

  fileDownload(data, filename);
};
