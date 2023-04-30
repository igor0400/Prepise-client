import { useMediaQuery } from '@chakra-ui/react';
import { FC } from 'react';
import { UserItems, UserType } from '../../../entities/User';
import UserPageInfo from '../../../entities/UserPageInfo';
import UserPageStat from '../../../entities/UserPageStat';
import FavouriteIconBtn from '../../../features/FavouriteIconBtn';
import { CustomTag } from '../../../shared';
import UserPageTabs from '../../UserPageTabs';
import UPFollowBtn from './FollowBtn';

interface FavSettings {
  storeName: UserItems;
  dataUrl: string;
}

const UserPage: FC<UserType> = (item) => {
  const { type, description, tags, questions, blocks, id } = item;
  const isUser = type === 'user';
  const favouriteSettings: FavSettings = {
    dataUrl: `favourites/${isUser ? 'users' : 'companies'}/:id`,
    storeName: isUser ? 'favouriteUsers' : 'favouriteCompanies',
  };
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  // сделать посты

  return (
    <div className="max-w-3xl mx-auto pt-8 sm:pt-14 pb-20 sm:pb-28">
      <UserPageInfo
        user={item}
        favouriteBtn={
          <FavouriteIconBtn
            item={item}
            {...favouriteSettings}
            size={isLargerThan640 ? 15 : 13}
          />
        }
        followBtn={<UPFollowBtn type={type} authorId={id} />}
      />
      <UserPageStat user={item} className="pt-4" />

      {description && (
        <div className="pt-4">
          <h3 className="font-semibold text-lg">Описание</h3>
          <p className="font-medium text-gray-700">{description}</p>
        </div>
      )}

      {tags?.length > 0 && (
        <div className="pt-4">
          <h3 className="font-semibold text-lg mb-1">Теги</h3>
          <div className="flex flex-wrap gap-1">
            {tags.map(({ name }, i) => (
              <CustomTag key={i} label={name} />
            ))}
          </div>
        </div>
      )}

      <UserPageTabs
        className="mt-5"
        questions={questions.filter((i) => i.type === 'default')}
        tests={questions.filter((i) => i.type === 'test')}
        blocksQuestions={blocks.filter((i) => i.type === 'default')}
        blocksTests={blocks.filter((i) => i.type === 'test')}
      />
    </div>
  );
};

export default UserPage;
