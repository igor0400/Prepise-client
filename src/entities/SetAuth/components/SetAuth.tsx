import { FC, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../app';
import { getUserData } from '../lib/api/get-user-data';

const SetAuth: FC = () => {
  const dispatch = useDispatch();

  const token =
    typeof window !== 'undefined' && localStorage.getItem('accessToken');

  useLayoutEffect(() => {
    if (token) {
      setData();
    }
  }, [token]);

  async function setData() {
    const user = await getUserData();

    if (user) {
      dispatch(setUserData(user));
    }
  }

  return <></>;
};

export default SetAuth;
