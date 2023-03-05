import EmailIcon from '@mui/icons-material/Email';
import MailLockIcon from '@mui/icons-material/MailLock';
import LockIcon from '@mui/icons-material/Lock';
import SubtitlesIcon from '@mui/icons-material/Subtitles';

import { RegInputData } from '../../../entities/RegisterFormFrame';

export const inputs: RegInputData[] = [
  {
    id: 'name',
    label: 'Название:',
    placeholder: 'Prepise',
    Icon: SubtitlesIcon,
  },
  {
    id: 'password',
    label: 'Пароль:',
    placeholder: 'StrongPassword!!!',
    Icon: LockIcon,
    type: 'password',
  },
  {
    id: 'email',
    label: 'Почта:',
    placeholder: 'prepise@mail.ru',
    Icon: EmailIcon,
    type: 'email',
  },
  {
    id: 'emailVerifyCode',
    label: 'Код подтверждения:',
    placeholder: 'JFN343ojNG',
    Icon: MailLockIcon,
  },
];
