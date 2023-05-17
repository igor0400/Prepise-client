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
      <div className="flex flex-col gap-1 pb-3">
        {icon?.src ? (
          <Image
            src={icon}
            alt={title}
            width={iconSize ?? 22}
            height={iconSize ?? 22}
          />
        ) : (
          icon
        )}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default ContentWrapper;
