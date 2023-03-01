import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MailLockIcon from '@mui/icons-material/MailLock';
import LockIcon from '@mui/icons-material/Lock';

interface InputData {
  id: string;
  label: string;
  placeholder: string;
  Icon: Function;
  type?: string;
}

export const inputs: InputData[] = [
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
