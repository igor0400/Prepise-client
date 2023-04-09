import React, { FC, MouseEventHandler } from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ShareBtn: FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Поделиться <IosShareIcon />
    </button>
  );
};

export default ShareBtn;
