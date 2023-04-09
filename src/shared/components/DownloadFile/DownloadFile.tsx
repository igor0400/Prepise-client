import { DownloadIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import React, { FC } from 'react';
import { handleDownload } from '../../lib/assets/handleDownload';
import { parseFileSize } from '../../lib/assets/parseFileSize';
import { sliceText } from '../../lib/assets/sliceText';

interface Props {
  url: string;
  name: string;
  size: number;
}

const DownloadFile: FC<Props> = ({ url, name, size }) => {
  const toast = useToast();

  return (
    <button
      onClick={() => handleDownload(url, name, toast)}
      className="flex bg-neutral-300 px-3 py-1 rounded items-center text-black"
      style={{ width: 290 }}
    >
      <p className="text-sm sm:text-base">{sliceText(name, 20)}</p>
      <p className="flex-1 text-xs font-medium text-right pr-1">
        {parseFileSize(size)}
      </p>
      <DownloadIcon />
    </button>
  );
};

export default DownloadFile;
