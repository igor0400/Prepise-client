import React, { FC } from 'react';
import { UsedUserInfo } from '../../../shared';

import FavouriteIconBtn from '../../../features/FavouriteIconBtn';
import { QuestionType } from '../../../entities/Question';
import { BlockType } from '../../../entities/Block';
import { UserItems } from '../../../entities/User';
import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';
import Reactions from '../../../features/Reactions';

interface Props {
  item: QuestionType | BlockType;
  favouriteSettings: {
    storeName: UserItems;
    dataUrl: string;
  };
  reactionsUrl: string;
  className?: string;
}

const ItemPageBar: FC<Props> = ({
  item,
  favouriteSettings,
  className,
  reactionsUrl,
}) => {
  const {
    id,
    title,
    createdAt,
    updatedAt,
    viewes,
    likes,
    dislikes,
    usedUsersInfo,
  } = item;
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [isLargerThan651] = useMediaQuery('(min-width: 651px)');

  console.log(usedUsersInfo);

  return (
    <div
      className={classNames(
        'justify-between rounded-lg border-2 border-gray-300',
        {
          'p-2': !isLargerThan651,
          'flex p-5': isLargerThan651,
          [className ?? '']: className,
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
      <div
        className={classNames('flex items-center gap-1 sm:gap-2', {
          'mt-2': !isLargerThan651,
        })}
      >
        <Reactions
          itemId={id}
          url={reactionsUrl}
          likes={likes}
          dislikes={dislikes}
          usedUsersInfo={usedUsersInfo}
        />

        <FavouriteIconBtn
          item={item}
          {...favouriteSettings}
          size={isLargerThan768 ? 17 : 15}
        />
      </div>
    </div>
  );
};

export default ItemPageBar;
