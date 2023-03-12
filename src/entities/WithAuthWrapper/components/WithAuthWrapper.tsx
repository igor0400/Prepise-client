import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import { resetUserData } from '../../User';
import { useDispatch } from 'react-redux';
import { TripleLoader } from '../../../shared';

interface Props {
  children: ReactNode;
}

const WithAuthWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  if (typeof window !== 'undefined' && !localStorage.getItem('accessToken')) {
    dispatch(resetUserData());
    router.push({
      pathname: '/login',
      query: { redirect: router.pathname.slice(1) },
    });
    return (
      <div className="flex justify-center items-center w-full h-full">
        <TripleLoader />
      </div>
    );
  }

  return <>{children}</>;
};

export default WithAuthWrapper;
