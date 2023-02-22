import { FC, useState } from 'react';
import classNames from 'classnames';

import Image from 'next/image';
import { Button } from '../../shared';
import Link from 'next/link';

import { Dropdown } from 'antd';

import { items } from './config/header-config';

import logo from '../../../public/logo100x56.svg';
import plus from '../../../public/icons/plus_.svg';
import search from '../../../public/icons/search.svg';
import MenuIcon from '@mui/icons-material/Menu';

const Header: FC = () => {
    const [inputFocus, setInputFocus] = useState(false);

    return (
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
            <div
                className={classNames(
                    'search-input justify-between rounded-md ml-10 sm:flex hidden',
                    { 'border-2': inputFocus, 'p-0.5': !inputFocus },
                )}
            >
                <input
                    className="font-semibold text-base p-2.5 h-9 grow"
                    type="text"
                    placeholder="Поиск..."
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />
                <Image
                    className="mr-2.5 my-1 cursor-pointer"
                    src={search}
                    alt="search"
                    width={27}
                    height={27}
                />
            </div>
            <div className="grow sm:hidden flex">
                <Image
                    className="cursor-pointer ml-auto mr-1"
                    src={search}
                    alt="search"
                    width={35}
                    height={35}
                />
            </div>

            <div className="xl:hidden flex sm:grow ml-2">
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <MenuIcon className="ml-auto text-slate-600 text-4xl" />
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
                    <Button>Войти</Button>
                </Link>
                <Link href="/register">
                    <Button theme={'lined'}>Регистрация</Button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
