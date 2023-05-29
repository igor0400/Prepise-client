import React, { FC } from 'react';
import { tabs } from '../configs/tabs';
import TabItem from './TabItem';

const ProfileNavbar: FC = () => {
  // сделать скролл в бок на 640px
  // адаптировать все страницы профиля

  return (
    <div className="flex sm:flex-col sm:gap-2">
      {tabs.map((items, num) => (
        <div className="bg-white rounded-md max-sm:flex" key={num}>
          {items.map((tabItem, i) => (
            <TabItem key={i} {...tabItem} index={i} itemsLen={items.length} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfileNavbar;
