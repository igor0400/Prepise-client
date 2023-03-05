import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import { LogInputData } from '../../../entities/LoginFormFrame';

export const userInputs: LogInputData[] = [
  {
    id: 'email',
    label: 'Почта:',
    placeholder: 'alexey.vilnusov@gmail.com',
    Icon: EmailIcon,
    type: 'email',
  },
  {
    id: 'password',
    label: 'Пароль:',
    placeholder: 'Something!1!2?3',
    Icon: LockIcon,
    type: 'password',
  },
];

export const companyInputs: LogInputData[] = [
  {
    id: 'email',
    label: 'Почта:',
    placeholder: 'sber.bank@gmail.com',
    Icon: EmailIcon,
    type: 'email',
  },
  {
    id: 'password',
    label: 'Пароль:',
    placeholder: 'Something!1!2?3',
    Icon: LockIcon,
    type: 'password',
  },
];
