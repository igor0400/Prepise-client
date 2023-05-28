import { FC, useState } from 'react';
import sendRegisterCode from '../lib/api/send-register-code';
import { useToast } from '@chakra-ui/react';
import classNames from 'classnames';
import { useRequest } from '../../../../shared';
import { sendChangePassCode } from '../../SendEmailCodeText/lib/api/send-change-pass-code';
import { sendDefaultCode } from '../lib/api/send-default-code';

interface Props {
  getEmail: Function;
  setError?: Function;
  type?: 'register' | 'changePass' | 'default';
}

const SendEmailCodeText: FC<Props> = ({
  getEmail,
  setError,
  type = 'default',
}) => {
  const toast = useToast();
  const [disable, setDisable] = useState<boolean>(false);
  const { request, loading } = useRequest(false);

  const handleClick = async () => {
    const email = getEmail();

    if (!email && setError) {
      setError('email', {
        type: 'custom',
        message: 'Это обязательное поле',
      });
      return;
    }

    setDisable(true);

    const reqFunc =
      type === 'changePass'
        ? sendChangePassCode
        : type === 'register'
        ? sendRegisterCode
        : sendDefaultCode;
    await request(reqFunc, true, toast, email);
    setTimeout(() => setDisable(false), 3000);
  };

  return (
    <p className="pt-1 text-sm">
      Код будет отправлен вам на почту.{' '}
      {loading ? (
        <span style={{ color: 'rgb(0 78 255)' }}>Отправка...</span>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          style={{ color: 'rgb(0 78 255)' }}
          disabled={disable}
          className={classNames('', {
            'cursor-not-allowed': disable,
          })}
        >
          Отправить
        </button>
      )}
    </p>
  );
};

export default SendEmailCodeText;
