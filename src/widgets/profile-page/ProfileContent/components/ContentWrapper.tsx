import Image from 'next/image';
import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  icon: any;
  iconSize?: number;
}

const ContentWrapper: FC<Props> = ({ children, title, icon, iconSize }) => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-1 pb-5">
        <div
          style={{ width: 28, height: 28 }}
          className="flex items-center justify-center"
        >
          {icon?.src ? (
            <Image
              src={icon}
              alt={title}
              width={iconSize ?? 28}
              height={iconSize ?? 28}
            />
          ) : (
            icon
          )}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default ContentWrapper;
