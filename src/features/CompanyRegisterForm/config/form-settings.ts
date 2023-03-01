import EmailIcon from '@mui/icons-material/Email';
import MailLockIcon from '@mui/icons-material/MailLock';
import LockIcon from '@mui/icons-material/Lock';
import SubtitlesIcon from '@mui/icons-material/Subtitles';

import { InputData } from '../../../entities/RegisterFormFrame';

export const inputs: InputData[] = [
  {
    id: 'name',
    label: 'Название:',
    placeholder: 'Сбер',
    Icon: SubtitlesIcon,
  },
  {
    id: 'password',
    label: 'Пароль:',
    placeholder: 'Something!1!2?3',
    Icon: LockIcon,
    type: 'password',
  },
  {
    id: 'email',
    label: 'Почта:',
    placeholder: 'sber.bank@gmail.com',
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
