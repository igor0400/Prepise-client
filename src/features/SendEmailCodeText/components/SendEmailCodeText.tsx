import { FC, useState } from 'react';
import sendEmailCode from '../lib/api/send-email-code';
import { useToast } from '@chakra-ui/react';

interface Props {
  email: string;
  setError: Function;
}

const SendEmailCodeText: FC<Props> = ({ email, setError }) => {
  const toast = useToast();
  const [disable, setDisable] = useState<boolean>(false);

  const handleClick = () => {
    if (!email) {
      setError('email', {
        type: 'custom',
        message: 'Это обязательное поле',
      });
      return;
    }

    sendEmailCode(toast, email);
    setDisable(true);
    setTimeout(() => setDisable(false), 3000);
  };

  return (
    <p className="pt-1 text-sm">
      Код будет отправлен вам на почту.{' '}
      <button
        type="button"
        onClick={handleClick}
        style={{ color: 'rgb(0 78 255)' }}
        disabled={disable}
      >
        Отправить
      </button>
    </p>
  );
};

export default SendEmailCodeText;
