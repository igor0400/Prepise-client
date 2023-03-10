import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="footer padding-50 sm:flex sm:justify-between">
      <p>
        ©Prepise | <Link href="mailto:prepise@mail.ru">prepise@mail.ru</Link> |{' '}
        <Link href="#" target="_blank">
          telegram
        </Link>{' '}
        |{' '}
        <Link href="https://discord.gg/B32AH5Ug7j" target="_blank">
          discord
        </Link>
      </p>
      <p>
        Developed by{' '}
        <Link href="https://github.com/igor0400" target="_blank">
          igor0400
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
