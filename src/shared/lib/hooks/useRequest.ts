import { useToast } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { resetUserData, setUserData } from '../../../entities/User';
import { authErrorHeadler, errorHandlerMessage } from '../api/handlers';
import { useRedirectToLogin } from './useRedirectToLogin';
import { useTypedSelector } from './useTypedSelector';

export const useRequest = (
  secure: boolean = true,
  redirect: boolean = false,
  initialLoading: boolean = false,
) => {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState<any>(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const redirectToLogin = useRedirectToLogin();
  const { isAuth } = useTypedSelector((state) => state.user);

  const request = useCallback(
    async (request: Function, withMessage: boolean = true, ...args: any[]) => {
      if (!isAuth && redirect) return redirectToLogin();

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
            redirectToLogin();
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
