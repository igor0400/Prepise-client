import { FC, useMemo } from 'react';

import Image from 'next/image';
import { Button, SearchInput } from '../../../shared';
import Link from 'next/link';
import { Dropdown } from 'antd';

import { items, createItems } from '../config/header-config';

import { useTypedSelector } from '../../../shared';
import { Avatar } from '@chakra-ui/react';

import logo from '../../../../public/images/logo100x56.svg';
import plus from '../../../../public/images/icons/plus.svg';
import { MenuIcon } from '../../../shared';

const Header: FC = () => {
  const { isAuth, data } = useTypedSelector((state) => state.user);

  const isDefaultAvatar = useMemo(
    () => data?.avatar && data.avatar.split('/')[2] === 'default',
    [data],
  );

  return (
    <div className="header-wrapper">
      <header className="header min-max-width flex justify-between padding-50">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={56}
            className="sm:w-28 w-20"
          />
        </Link>

        <SearchInput />

        <div className="xl:hidden flex ml-auto">
          <Dropdown
            menu={{ items: items(isAuth) }}
            placement="bottomRight"
            trigger={['click']}
            arrow
          >
            <MenuIcon />
          </Dropdown>
        </div>

        <div className="btns grow justify-end gap-3.5 hidden xl:flex items-center">
          <Dropdown
            menu={{ items: createItems }}
            placement="bottom"
            trigger={['click']}
            arrow
          >
            <Button theme="shadow" className="pr-7 pl-6">
              <Image
                src={plus}
                alt="plus"
                width={20}
                height={20}
                className="mr-0.5 mb-0.5"
              />
              Опубликовать
            </Button>
          </Dropdown>

          {isAuth ? (
            <Link href="/profile">
              <Avatar
                className="avatar ml-2 hidden xl:block justify-end"
                style={{
                  padding: isDefaultAvatar ? '6px' : 0,
                  background: isDefaultAvatar ? '#fff' : 'none',
                }}
                name={data?.name ?? 'Загрузка...'}
                src={`${process.env.NEXT_PUBLIC_SERVER}${data?.avatar}`}
              />
            </Link>
          ) : (
            <>
              <Link href="/auth/login">
                <Button>Вход</Button>
              </Link>
              <Link href="/auth/register">
                <Button theme={'lined'}>Регистрация</Button>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
