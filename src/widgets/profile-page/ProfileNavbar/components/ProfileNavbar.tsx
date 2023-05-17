import React, { FC } from 'react';
import { tabs } from '../configs/tabs';
import TabItem from './TabItem';

const ProfileNavbar: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      {tabs.map((items, num) => (
        <div className="bg-white rounded-md" key={num}>
          {items.map((tabItem, i) => (
            <TabItem key={i} {...tabItem} index={i} itemsLen={items.length} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfileNavbar;
