import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MailLockIcon from '@mui/icons-material/MailLock';
import LockIcon from '@mui/icons-material/Lock';

import { RegInputData } from '../../../entities/RegisterFormFrame';

export const inputs: RegInputData[] = [
  {
    id: 'name',
    label: 'Имя:',
    placeholder: 'Алексей Вильнусов',
    Icon: PersonIcon,
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
