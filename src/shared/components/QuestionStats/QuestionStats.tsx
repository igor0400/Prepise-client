import Image from 'next/image';
import { FC } from 'react';
import likesIcon from '../../../../public/images/icons/light-like.svg';
import viewesIcon from '../../../../public/images/icons/view.svg';

interface Props {
  likes: number;
  viewes: number;
}

const QuestionStats: FC<Props> = ({ likes = 0, viewes = 0 }) => {
  return (
    <div className="flex items-end gap-1 text-gray-500 pb-1">
      <div className="flex items-end gap-0.5">
        <p className="font-medium leading-4">{likes}</p>
        <Image
          src={likesIcon}
          alt="likes"
          width={18}
          height={18}
          className="my-auto pb-0.5"
        />
      </div>
      <div className="flex gap-0.5 items-end">
        <p className="font-medium leading-4">{viewes}</p>
        <Image
          src={viewesIcon}
          alt="viewes"
          width={18}
          height={18}
          className="my-auto"
        />
      </div>
    </div>
  );
};

export default QuestionStats;
