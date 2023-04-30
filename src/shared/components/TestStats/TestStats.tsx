import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import likesIcon from '../../../../public/images/icons/light-like.svg';
import repliesIcon from '../../../../public/images/icons/replie.svg';

interface Props {
  likes: number;
  replies: number;
  size?: 'big' | 'small';
}

const TestStats: FC<Props> = ({ likes = 0, replies = 0, size = 'big' }) => {
  const isBig = size === 'big';
  const iconsSize = isBig ? 18 : 15;

  return (
    <div className="flex items-end text-gray-500">
      <div className="flex pr-1">
        <p
          className={classNames('font-medium pr-0.5 pt-1.5', {
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
          style={{ paddingTop: 1 }}
        />
      </div>
      <div className="flex">
        <p
          className={classNames('font-medium pt-1', {
            'text-sm': !isBig,
          })}
          style={{ paddingRight: 1 }}
        >
          {replies}
        </p>
        <Image
          src={repliesIcon}
          alt="replies"
          width={iconsSize}
          height={iconsSize}
          className="pt-0.5"
        />
      </div>
    </div>
  );
};

export default TestStats;
