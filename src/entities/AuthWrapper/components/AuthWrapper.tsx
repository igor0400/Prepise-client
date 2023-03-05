import { Spinner } from '@chakra-ui/react';
import { FC, useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading, setUserData } from '../../../app';
import { TripleLoader } from '../../../shared';
import { useTypedSelector } from '../../../shared/lib/hooks/useTypedSelector';
import { getUserData } from '../lib/api/get-user-data';

interface Props {
  children: ReactNode;
}

const AuthWrapper: FC<Props> = ({ children }) => {
  const { loading } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  const token =
    typeof window !== 'undefined' && localStorage.getItem('accessToken');

  useEffect(() => {
    if (token) {
      setData();
    }
  }, [token]);

  async function setData() {
    dispatch(setLoading(true));
    const user = await getUserData();

    if (user) {
      dispatch(setUserData(user));
    }

    dispatch(setLoading(false));
  }
  
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <TripleLoader />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
