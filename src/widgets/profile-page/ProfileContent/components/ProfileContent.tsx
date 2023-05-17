import React, { FC } from 'react';
import { useTypedSelector } from '../../../../shared';
import { contents } from '../configs/contents';

const ProfileContent: FC = () => {
  const activeTab = useTypedSelector((state) => state.profile.navbar.activeTab);
  const content = contents[activeTab] ?? contents.notify;

  return <div>{content}</div>;
};

export default ProfileContent;
