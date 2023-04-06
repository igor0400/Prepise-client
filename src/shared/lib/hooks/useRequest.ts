import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { resetUserData, setUserData } from '../../../entities/User';
import { authErrorHeadler, errorHandlerMessage } from '../api/handlers';
import { redirectToLogin } from '../assets/redirectToLogin';

export const useRequest = (secure: boolean = true) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const router = useRouter();

  const request = useCallback(
    async (request: Function, withMessage: boolean = true, ...args: any[]) => {
      setLoading(true);

      try {
        const data = await request(...args);
        return data;
      } catch (e: any) {
        const status = await e?.response?.status;

        if (secure && status === 401) {
          // вызов refresh если access token истек
          const user = await authErrorHeadler();
          if (user) {
            dispatch(setUserData(user));
            try {
              const data = await request(...args);
              return data;
            } catch (e) {
              returnError(e, withMessage);
            }
          } else {
            dispatch(resetUserData());
            redirectToLogin(toast, router);
          }
        } else {
          returnError(e, withMessage);
        }
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  function returnError(error: any, withMessage: boolean) {
    setError(error);
    if (withMessage) errorHandlerMessage(error, toast);
  }

  return { loading, error, request };
};
