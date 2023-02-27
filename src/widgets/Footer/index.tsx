import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="footer padding-50">
      <p>
        ©Prepise | Developed by{' '}
        <Link href="https://github.com/igor0400" target="_blank">
          igor0400
        </Link>
      </p>
    </div>
  );
};

export default Footer;
