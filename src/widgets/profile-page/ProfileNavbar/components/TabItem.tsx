import React, { FC } from 'react';
import { Divider, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import { Tab } from '../model/types/tab';
import { useTypedSelector } from '../../../../shared';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../../../entities/profile';
import { useRouter } from 'next/router';
import { getSortedNotify } from '../../../../entities/Notification';

interface Props extends Tab {
  index: number;
  itemsLen: number;
  openSignOutModel: Function;
}

const TabItem: FC<Props> = ({
  id,
  icon,
  iconSize,
  name,
  index,
  itemsLen,
  openSignOutModel,
}) => {
  const activeItem = useTypedSelector(
    (state) => state.profile.navbar.activeTab,
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useTypedSelector((state) => state.user.data);
  const items = user?.notifications;
  const { yang } = getSortedNotify(items ?? []);
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  const handleClick = () => {
    if (id === 'singOut') {
      openSignOutModel();
    } else {
      dispatch(setActiveTab(id));
      router.push({ query: { tab: id } });
    }
  };

  const isFirst = index === 0;
  const isLast = index + 1 === itemsLen;
  const isActive = activeItem === id;
  const newNotify = yang.length;

  return (
    <>
      <div className="flex relative">
        {isActive && isLargerThan640 && (
          <div
            className="h-full w-1.5 absolute bg-green-200 -left-1.5"
            style={{
              borderRadius: '6px 0 0 6px',
            }}
          ></div>
        )}
        <div
          className={classNames(
            'p-3 sm:p-4 flex gap-3 cursor-pointer transition w-full justify-center lg:justify-start',
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
            className="flex items-center justify-center mx-1.5 relative"
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
            {id === 'notify' && newNotify > 0 && (
              <p className="absolute -top-1.5 left-1.5 bg-red-600 text-[10px] py-0.5 px-2 rounded-full text-white font-semibold">
                {newNotify}
              </p>
            )}
          </div>
          {isLargerThan1024 && <p className="font-medium">{name}</p>}
        </div>
      </div>
      {!isLast && <Divider className="lg:w-[calc(100%-60px)] lg:ml-auto" />}
    </>
  );
};

export default TabItem;
