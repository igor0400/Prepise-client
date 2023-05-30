import { useDisclosure } from '@chakra-ui/react';
import React, { FC } from 'react';
import SignOutModal from '../../../../features/SignOutModal';
import { tabs } from '../configs/tabs';
import TabItem from './TabItem';

const ProfileNavbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex sm:flex-col sm:gap-2">
        {tabs.map((items, num) => (
          <div className="bg-white rounded-md max-sm:flex" key={num}>
            {items.map((tabItem, i) => (
              <TabItem
                key={i}
                {...tabItem}
                index={i}
                itemsLen={items.length}
                openSignOutModel={onOpen}
              />
            ))}
          </div>
        ))}
      </div>
      <SignOutModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProfileNavbar;
