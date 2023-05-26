import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import chatIcon from 'public/images/icons/chat-bold.svg';

const Chat: FC = () => {
  return (
    <ProfileContentWrapper title="Мессенджер" icon={chatIcon} iconSize={24}>
      <p className="text-xl font-semibold text-center">Скоро...</p>
    </ProfileContentWrapper>
  );
};

export default Chat;
