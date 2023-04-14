import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CirclesWrapper } from '../../../shared';

import logo from '../../../../public/images/logo300x168.svg';
import arrow from '../../../../public/images/icons/arrow-right.svg';

const StartScreen: FC = () => {
  return (
    <CirclesWrapper>
      <div className="start-screen full-height text-center justify-center padding-50 relative">
        <Image
          src={logo}
          alt="logo"
          width={180}
          height={100}
          className="mx-auto md:w-44 sm:w-36 w-28"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black max-w-4xl sm:py-4 py-3 mx-auto">
          Удобная подготовка к собеседованиям
        </h1>
        <p className="text-base sm:text-lg md:text-xl light-text font-medium sm:max-w-xl max-w-md mx-auto">
          Готовьтесь сами, помогайте другим, ищите работу или сотрудника!
        </p>
        <Link href="/main" className="gradient-btn">
          <p>Начать</p>
          <Image src={arrow} alt="arrow" width={24} height={24} />
        </Link>
      </div>
    </CirclesWrapper>
  );
};

export default StartScreen;
