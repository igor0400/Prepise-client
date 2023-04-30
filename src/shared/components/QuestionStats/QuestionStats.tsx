import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import likesIcon from '../../../../public/images/icons/light-like.svg';
import viewesIcon from '../../../../public/images/icons/view.svg';

interface Props {
  likes: number;
  viewes: number;
  size?: 'big' | 'small';
}

const QuestionStats: FC<Props> = ({ likes = 0, viewes = 0, size = 'big' }) => {
  const isBig = size === 'big';
  const iconsSize = isBig ? 18 : 15;

  return (
    <div className="flex items-end gap-1 text-gray-500 pb-1">
      <div className="flex items-end gap-0.5">
        <p
          className={classNames('font-medium leading-4', {
            'text-sm': !isBig,
          })}
        >
          {likes}
        </p>
        <Image
          src={likesIcon}
          alt="likes"
          width={iconsSize}
          height={iconsSize}
          className="my-auto pb-0.5"
        />
      </div>
      <div className="flex gap-0.5 items-end">
        <p
          className={classNames('font-medium leading-4', {
            'text-sm': !isBig,
          })}
        >
          {viewes}
        </p>
        <Image
          src={viewesIcon}
          alt="viewes"
          width={iconsSize}
          height={iconsSize}
          className="my-auto"
        />
      </div>
    </div>
  );
};

export default QuestionStats;
