import { useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';

import like from 'public/images/icons/like.svg';
import dislike from 'public/images/icons/dislike.svg';
import { useRequest, useTypedSelector } from '../../../shared';
import { postReaction } from '../lib/api/postReaction';

interface Props {
  url: string;
  itemId: number;
  likes: number;
  dislikes: number;
  usedUsersInfo: any[];
}

const Reactions: FC<Props> = ({
  url,
  itemId,
  likes,
  dislikes,
  usedUsersInfo,
}) => {
  const userId = useTypedSelector((state) => state.user.data?.id);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { request } = useRequest(true, true);
  const [aciveReaction, setActiveReaction] = useState<
    'like' | 'dislike' | null
  >(null);

  // сделать реакции

  useEffect(() => {
    for (let item of usedUsersInfo) {
      if (item?.userId === userId) {
        if (item.isDislike) setActiveReaction('dislike');
        if (item.isLike) setActiveReaction('like');
      }
    }
  }, [usedUsersInfo]);

  const reactionsSize = isLargerThan768 ? 28 : 25;

  const handleClick = async (type: 'like' | 'dislike') => {
    const data = await request(postReaction, true, `${url}/${type}/${itemId}`);
    console.log(data);
  };

  return (
    <>
      <div className="flex gap-1 items-center">
        <span className="text-xl md:text-2xl font-semibold">
          {aciveReaction === 'like' ? likes + 1 : likes}
        </span>
        <Image
          src={like}
          alt="like"
          className="pb-2 cursor-pointer"
          width={reactionsSize}
          height={reactionsSize}
          onClick={() => handleClick('like')}
        />
      </div>

      <div className="flex gap-1 items-center pr-0.5">
        <span className="text-xl md:text-2xl font-semibold">
          {aciveReaction === 'dislike' ? dislikes + 1 : dislikes}
        </span>
        <Image
          src={dislike}
          alt="dislike"
          className="pt-2 cursor-pointer"
          width={reactionsSize}
          height={reactionsSize}
          onClick={() => handleClick('dislike')}
        />
      </div>
    </>
  );
};

export default Reactions;
