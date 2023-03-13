import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MailLockIcon from '@mui/icons-material/MailLock';
import LockIcon from '@mui/icons-material/Lock';
import SubtitlesIcon from '@mui/icons-material/Subtitles';

import { RegInputData } from '../../../../entities/forms/RegisterFormFrame';

export const userInputs: RegInputData[] = [
  {
    id: 'name',
    label: 'Имя:',
    placeholder: 'Алексей Вильнусов',
    Icon: PersonIcon,
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
    placeholder: 'alexey.vilnusov@gmail.com',
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

export const companyInputs: RegInputData[] = [
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
