import { useMediaQuery, useToast } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { InlineBtn } from '../../../shared';
import IosShareIcon from '@mui/icons-material/IosShare';

const ShareBtn: FC = () => {
  const [path, setPath] = useState<string | undefined>(undefined);
  const toast = useToast();
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  useEffect(() => {
    setPath(window.location.href);
  }, []);

  const onClick = async () => {
    try {
      if (!path) {
        throw new Error('Значание path не установлено.');
      }

      await navigator.clipboard.writeText(path);
      toast({
        description: 'Ссылка скопирована',
        status: 'success',
        duration: 2000,
      });
    } catch (err) {
      toast({
        description: 'Ошибка копирования',
        status: 'error',
        duration: 2000,
      });
    }
  };

  return (
    <InlineBtn onClick={onClick} className="text-sm sm:text-base">
      <span className="mr-0.5">Поделиться</span>
      <IosShareIcon className="mb-0.5" style={{ fontSize: isLargerThan640 ? 18 : 16 }} />
    </InlineBtn>
  );
};

export default ShareBtn;
