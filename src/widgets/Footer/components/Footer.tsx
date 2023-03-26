import Link from 'next/link';
import { FC } from 'react';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import { DiscordIcon } from '../../../shared';

const Footer: FC = () => {
  return (
    <footer className="footer bg-zinc-300 padding-50 flex justify-center">
      <div className="text-center">
        <div className="flex justify-center items-center gap-3">
          <Link href="mailto:prepise@mail.ru">
            <AlternateEmailIcon style={{ width: 25, height: 25 }} />
          </Link>
          <Link href="/" target="_blank">
            <TelegramIcon style={{ width: 28, height: 28 }} />
          </Link>
          <Link href="https://discord.gg/B32AH5Ug7j" target="_blank">
            <DiscordIcon style={{ width: 25, height: 25 }} />
          </Link>
        </div>

        <p className="prod mt-1 sm:my-1">
          Prod. by{' '}
          <Link href="https://github.com/igor0400" target="_blank">
            igor0400
          </Link>
        </p>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Prepise
        </p>
      </div>
    </footer>
  );
};

export default Footer;
