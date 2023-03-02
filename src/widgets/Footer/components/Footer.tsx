import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="footer padding-50 sm:flex">
      <p>
        Developed by{' '}
        <Link href="https://github.com/igor0400" target="_blank">
          igor0400
        </Link>
      </p>
      <p className="sm:pl-5">
        ©Prepise | <Link href="mailto:prepise@mail.ru">prepise@mail.ru</Link>
      </p>
    </footer>
  );
};

export default Footer;
