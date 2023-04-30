import { FC } from 'react';

interface Props {
  count: number;
  title: string;
}

const StatItem: FC<Props> = ({ count, title }) => {
  return (
    <div className="text-center">
      <span className="font-bold text-base sm:text-lg">{count}</span>
      <p className="font-medium text-sm sm:text-base -mt-1.5 text-gray-500">
        {title}
      </p>
    </div>
  );
};

export default StatItem;
