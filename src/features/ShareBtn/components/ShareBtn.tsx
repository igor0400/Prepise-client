import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { ShareBtn as ShareBtnUI } from '../../../shared';

const ShareBtn: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const path = router.asPath;

  const onClick = async () => {
    try {
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

  return <ShareBtnUI onClick={onClick} />;
};

export default ShareBtn;
