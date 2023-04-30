import { useMediaQuery } from '@chakra-ui/react';
import { FC } from 'react';
import { UserItems, UserType } from '../../../entities/User';
import UserPageInfo from '../../../entities/UserPageInfo';
import UserPageStat from '../../../entities/UserPageStat';
import FavouriteIconBtn from '../../../features/FavouriteIconBtn';
import { CustomTag } from '../../../shared';
import UserPageTabs from '../../UserPageTabs';
import UPFollowBtn from './FollowBtn';
import Section from './Section';

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
        <Section title="Описание">
          <p className="font-medium text-sm sm:text-base text-gray-700">
            {description}
          </p>
        </Section>
      )}

      {tags?.length > 0 && (
        <Section title="Теги">
          <div className="flex flex-wrap gap-1 mt-0.5">
            {tags.map(({ name }, i) => (
              <CustomTag
                key={i}
                label={name}
                size={isLargerThan640 ? 'md' : 'sm'}
              />
            ))}
          </div>
        </Section>
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
