import classNames from 'classnames';
import Image from 'next/image';
import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string | ReactNode;
  icon: any;
  iconSize?: number;
  className?: string;
}

const ContentWrapper: FC<Props> = ({
  children,
  title,
  icon,
  iconSize,
  className,
}) => {
  return (
    <div
      className={classNames('sm:p-5', {
        [className ?? '']: className,
      })}
    >
      <div className="flex flex-col gap-1 pb-5">
        <div
          style={{ width: 28, height: 28 }}
          className="flex items-center justify-center"
        >
          {icon?.src ? (
            <Image
              src={icon}
              alt="icon"
              width={iconSize ?? 28}
              height={iconSize ?? 28}
            />
          ) : (
            icon
          )}
        </div>

        {typeof title === 'string' ? (
          <h2 className="text-2xl font-bold">{title}</h2>
        ) : (
          title
        )}
      </div>
      {children}
    </div>
  );
};

export default ContentWrapper;
