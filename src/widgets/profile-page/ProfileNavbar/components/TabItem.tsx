import React, { FC } from 'react';
import { Divider } from '@chakra-ui/react';
import Image from 'next/image';
import { Tab } from '../model/types/tab';
import { useTypedSelector } from '../../../../shared';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../../../entities/profile';

interface Props extends Tab {
  index: number;
  itemsLen: number;
}

const TabItem: FC<Props> = ({ id, icon, iconSize, name, index, itemsLen }) => {
  const activeItem = useTypedSelector(
    (state) => state.profile.navbar.activeTab,
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveTab(id));
  };

  const isFirst = index === 0;
  const isLast = index + 1 === itemsLen;
  const isActive = activeItem === id;

  return (
    <>
      <div className="flex relative">
        {isActive && (
          <div
            className="h-full w-1.5 absolute bg-green-200 -left-1.5"
            style={{
              borderRadius: '6px 0 0 6px',
            }}
          ></div>
        )}
        <div
          className={classNames(
            'p-4 flex gap-3 cursor-pointer transition w-full',
            {
              'bg-gray-100': isActive,
            },
          )}
          style={{
            borderRadius: `0 ${isFirst ? '6px' : 0} ${isLast ? '6px' : 0} 0`,
          }}
          onClick={handleClick}
        >
          <div
            className="flex items-center justify-center mx-1.5"
            style={{ width: 22 }}
          >
            {icon?.src ? (
              <Image
                src={icon}
                alt={name}
                width={iconSize ?? 22}
                height={iconSize ?? 22}
              />
            ) : (
              icon
            )}
          </div>
          <p className="font-medium">{name}</p>
        </div>
      </div>
      {!isLast && <Divider className="w-[calc(100%-60px)] ml-auto" />}
    </>
  );
};

export default TabItem;
