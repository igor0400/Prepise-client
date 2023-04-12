import { useMediaQuery } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';

import { Dislikes, Likes, useRequest, useTypedSelector } from '../../../shared';
import { deleteReaction } from '../lib/api/deleteReaction';
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
  const { request: likesRequest, loading: likesLoading } = useRequest(
    true,
    true,
  );
  const { request: dislikesRequest, loading: dislikesLoading } = useRequest(
    true,
    true,
  );
  const [activeReaction, setActiveReaction] = useState<
    'like' | 'dislike' | null
  >(null);
  const [viewLikes, setViewLikes] = useState(likes ?? 0);
  const [viewDislikes, setViewDislikes] = useState(dislikes ?? 0);

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
    if (likesLoading || dislikesLoading) return;

    if (type === 'like') {
      if (activeReaction !== 'like') {
        const data = await likesRequest(
          postReaction,
          true,
          `${url}/${type}/${itemId}`,
        );

        if (data) {
          if (activeReaction === 'dislike') {
            setViewDislikes((state) => state - 1);
          }
          setViewLikes((state) => state + 1);
          setActiveReaction('like');
        }
      } else {
        const data = await likesRequest(
          deleteReaction,
          true,
          `${url}/${type}/${itemId}`,
        );

        if (data) {
          setViewLikes((state) => state - 1);
          setActiveReaction(null);
        }
      }
    } else {
      if (activeReaction !== 'dislike') {
        const data = await dislikesRequest(
          postReaction,
          true,
          `${url}/${type}/${itemId}`,
        );

        if (data) {
          if (activeReaction === 'like') {
            setViewLikes((state) => state - 1);
          }
          setViewDislikes((state) => state + 1);
          setActiveReaction('dislike');
        }
      } else {
        const data = await dislikesRequest(
          deleteReaction,
          true,
          `${url}/${type}/${itemId}`,
        );

        if (data) {
          setViewDislikes((state) => state - 1);
          setActiveReaction(null);
        }
      }
    }
  };

  return (
    <>
      <Likes
        likes={viewLikes}
        size={reactionsSize}
        onClick={() => handleClick('like')}
        active={activeReaction === 'like'}
        isLoading={likesLoading}
      />

      <Dislikes
        dislikes={viewDislikes}
        size={reactionsSize}
        onClick={() => handleClick('dislike')}
        className="pr-0.5"
        active={activeReaction === 'dislike'}
        isLoading={dislikesLoading}
      />
    </>
  );
};

export default Reactions;
