import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import { LogInputData } from '../../../entities/LoginFormFrame';

export const inputs: LogInputData[] = [
  {
    id: 'email',
    label: 'Почта:',
    placeholder: 'prepise@mail.ru',
    Icon: EmailIcon,
    type: 'email',
  },
  {
    id: 'password',
    label: 'Пароль:',
    placeholder: 'StrongPassword!!!',
    Icon: LockIcon,
    type: 'password',
  },
];
