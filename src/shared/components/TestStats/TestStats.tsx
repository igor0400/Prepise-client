import Image from 'next/image';
import { FC } from 'react';
import likesIcon from '../../../../public/images/icons/like.svg';
import repliesIcon from '../../../../public/images/icons/replie.svg';

interface Props {
  likes: number;
  replies: number;
}

const TestStats: FC<Props> = ({ likes = 0, replies = 0 }) => {
  return (
    <div className="flex items-end text-gray-500">
      <div className="flex pr-1">
        <p className="font-medium pr-0.5 pt-1.5">{likes}</p>
        <Image src={likesIcon} alt="likes" width={18} height={18} />
      </div>
      <div className="flex">
        <p className="font-medium pt-1" style={{ paddingRight: 1 }}>
          {replies}
        </p>
        <Image
          src={repliesIcon}
          alt="replies"
          width={18}
          height={18}
          className="pt-0.5"
        />
      </div>
    </div>
  );
};

export default TestStats;
