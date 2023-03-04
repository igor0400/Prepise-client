import { FC } from 'react';

import Image from 'next/image';
import { Button, SearchInput } from '../../../shared';
import Link from 'next/link';
import { Dropdown } from 'antd';

import { items, createItems } from '../config/header-config';

import logo from '../../../../public/logo100x56.svg';
import plus from '../../../../public/icons/plus_.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { useTypedSelector } from '../../../shared/lib/hooks/useTypedSelector';
import { Avatar } from '@chakra-ui/react';

const Header: FC = () => {
  const { isAuth, data } = useTypedSelector((state) => state.user);

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
            <MenuIcon className="menu-icon ml-auto text-slate-600 cursor-pointer" />
          </Dropdown>
        </div>

        <div className="btns grow justify-end gap-3.5 hidden xl:flex items-center">
          <Dropdown
            menu={{ items: createItems }}
            placement="bottomRight"
            trigger={['click']}
            arrow
          >
            <Button theme="shadow">
              <Image
                src={plus}
                alt="plus"
                width={20}
                height={20}
                className="mr-0.5"
              />
              Опубликовать
            </Button>
          </Dropdown>

          {isAuth ? (
            <Link href="/profile">
              <Avatar
                className="ml-2 hidden xl:block justify-end bg-white border-gray-300 border-2 p-1.5 w-14 h-14"
                name={data?.name ?? 'Prepise'}
                src={`${process.env.NEXT_PUBLIC_SERVER}${data?.avatar}`}
              />
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button>Вход</Button>
              </Link>
              <Link href="/register">
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
