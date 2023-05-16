import { Divider } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { tabs } from '../configs/tabs';

const ProfileNavbar: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      {tabs.map((items, num) => (
        <div className="bg-white rounded-md" key={num}>
          {items.map(({ name, icon }, i) => (
            <div key={i}>
              <div className="p-4 flex gap-3 cursor-pointer hover:bg-gray-100 transition">
                {icon?.src ? (
                  <Image src={icon} alt={name} width={22} height={22} />
                ) : (
                  icon
                )}
                <p className="font-medium">{name}</p>
              </div>
              {i !== items.length - 1 && (
                <Divider className="w-[calc(100%-50px)] ml-auto" />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfileNavbar;
