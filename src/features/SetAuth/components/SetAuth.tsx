import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../app';
import { getUserData } from '../lib/api/getUserData';

const SetAuth: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      setData();
    }
  }, []);

  async function setData() {
    const user = await getUserData();

    if (user) {
      dispatch(setUserData(user));
    }
  }

  return <></>;
};

export default SetAuth;
