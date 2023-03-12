import { FC } from 'react';
import TripleLoader from '../TripleLoader/TripleLoader';

const FillPageLoader: FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <TripleLoader />
    </div>
  );
};

export default FillPageLoader;
