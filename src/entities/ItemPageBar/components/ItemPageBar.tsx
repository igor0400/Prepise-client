import React, { FC } from 'react';
import { UsedUserInfo } from '../../../shared';

import like from 'public/images/icons/like.svg';
import dislike from 'public/images/icons/dislike.svg';
import Image from 'next/image';
import FavouriteIconBtn from '../../../features/FavouriteIconBtn';
import { QuestionType } from '../../Question';
import { BlockType } from '../../Block';
import { UserFavourites } from '../../User';
import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';

interface Props {
  item: QuestionType | BlockType;
  favouriteSettings: {
    storeName: UserFavourites;
    dataUrl: string;
  };
}

const ItemPageBar: FC<Props> = ({ item, favouriteSettings }) => {
  const { title, createdAt, updatedAt, viewes } = item;
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [isLargerThan591] = useMediaQuery('(min-width: 591px)');

  const reactionsSize = isLargerThan768 ? 28 : 25;

  // доделать адаптив

  return (
    <div
      className={classNames(
        'justify-between rounded-lg border-2 border-gray-300 py-5 px-2 sm:px-5',
        {
          flex: isLargerThan591,
        },
      )}
    >
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
        <UsedUserInfo
          createdAt={createdAt}
          updatedAt={updatedAt}
          viewes={viewes}
        />
      </div>
      <div className={classNames("flex gap-2", {
        'justify-end mt-2': !isLargerThan591
      })}>
        <div className="flex gap-1 items-center">
          <span className="text-xl md:text-2xl font-semibold">55</span>
          <Image
            src={like}
            alt="like"
            className="pb-2 cursor-pointer"
            width={reactionsSize}
            height={reactionsSize}
          />
        </div>

        <div className="flex gap-1 items-center pr-0.5">
          <span className="text-xl md:text-2xl font-semibold">55</span>
          <Image
            src={dislike}
            alt="dislike"
            className="pt-2 cursor-pointer"
            width={reactionsSize}
            height={reactionsSize}
          />
        </div>

        <div className="flex items-center">
          <FavouriteIconBtn
            item={item}
            {...favouriteSettings}
            size={isLargerThan768 ? 17 : 15}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemPageBar;
