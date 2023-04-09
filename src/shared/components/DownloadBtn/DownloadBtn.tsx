import { DownloadIcon } from '@chakra-ui/icons';
import React, { FC } from 'react';
import { handleDownload } from '../../lib/assets/handleDownload';

interface Props {
  url: string;
  name: string;
  size: number;
}

const DownloadBtn: FC<Props> = ({ url, name, size }) => {
  // сделать размер файла
  // и обрезание размера

  return (
    <button
      onClick={() => handleDownload(url, name)}
      className="flex bg-neutral-300 px-3 py-1 rounded items-center text-black"
      style={{ width: 290 }}
    >
      <p className="text-sm sm:text-base">{name}</p>
      <p className="flex-1 text-xs font-medium text-right pr-1">{size}б</p>
      <DownloadIcon />
    </button>
  );
};

export default DownloadBtn;
