import { FC } from 'react';

import Image from 'next/image';
import { Button, SearchInput } from '../../../shared';
import Link from 'next/link';
import { Dropdown } from 'antd';

import { items } from '../config/header-config';

import logo from '../../../../public/logo100x56.svg';
import plus from '../../../../public/icons/plus_.svg';
import MenuIcon from '@mui/icons-material/Menu';

const Header: FC = () => {
  return (
    <div className="header-wrapper">
      <header className="header flex justify-between padding-50">
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
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <div className="menu-icon">
              <MenuIcon className="ml-auto text-slate-600" />
            </div>
          </Dropdown>
        </div>

        <div className="btns grow justify-end gap-3.5 hidden xl:flex">
          <Button theme={'shadow'}>
            <Image
              src={plus}
              alt="plus"
              width={20}
              height={20}
              className="mr-0.5"
            />
            Опубликовать
          </Button>
          <Link href="/login">
            <Button>Вход</Button>
          </Link>
          <Link href="/register">
            <Button theme={'lined'}>Регистрация</Button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
