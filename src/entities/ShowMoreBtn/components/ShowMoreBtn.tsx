import { Spinner, useMediaQuery } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Button } from '../../../shared';

interface Props {
  onClick: Function;
  loading: boolean;
}

const ShowMoreBtn: FC<Props> = ({ onClick, loading }) => {
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');

  return (
    <Button
      style={
        isSmallerThan1279
          ? { fontSize: '13px', padding: '0 16px', fontWeight: 600 }
          : { fontSize: '14px', padding: '0 20px' }
      }
      className="mt-5 flex mx-auto"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? <Spinner size="sm" className="mx-11" /> : 'Загрузить ещё'}
    </Button>
  );
};

export default ShowMoreBtn;
