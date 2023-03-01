import { FC, useState } from 'react';
import sendEmailCode from '../lib/api/send-email-code';
import { useToast } from '@chakra-ui/react';
import classNames from 'classnames';
import { useRequestHandler } from '../../../shared';

interface Props {
  email: string;
  setError: Function;
}

const SendEmailCodeText: FC<Props> = ({ email, setError }) => {
  const toast = useToast();
  const [disable, setDisable] = useState<boolean>(false);
  const { request, loading } = useRequestHandler();

  const handleClick = async () => {
    if (!email) {
      setError('email', {
        type: 'custom',
        message: 'Это обязательное поле',
      });
      return;
    }

    setDisable(true);
    await request(sendEmailCode, toast, email);
    setTimeout(() => setDisable(false), 3000);
  };

  return (
    <p className="pt-1 text-sm">
      Код будет отправлен вам на почту.{' '}
      <button
        type="button"
        onClick={handleClick}
        style={{ color: 'rgb(0 78 255)' }}
        disabled={disable || loading}
        className={classNames('', {
          'cursor-not-allowed': disable || loading,
        })}
      >
        Отправить
      </button>
    </p>
  );
};

export default SendEmailCodeText;
