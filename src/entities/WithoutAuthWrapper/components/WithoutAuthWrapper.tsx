import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { TripleLoader } from '../../../shared';

interface Props {
  children: ReactNode;
}

const WithoutAuthWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();

  if (typeof window !== 'undefined' && localStorage.getItem('accessToken')) {
    router.push('/');
    return (
      <div className="flex justify-center items-center w-full h-full">
        <TripleLoader />
      </div>
    );
  }

  return <>{children}</>;
};

export default WithoutAuthWrapper;
