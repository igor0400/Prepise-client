import { useMediaQuery } from '@chakra-ui/react';
import { FC } from 'react';
import { UserItems, UserType } from '../../../entities/User';
import UserPageInfo from '../../../entities/UserPageInfo';
import FavouriteIconBtn from '../../../features/FavouriteIconBtn';
import UPFollowBtn from './UPFollowBtn';

interface FavSettings {
  storeName: UserItems;
  dataUrl: string;
}

const UserPage: FC<UserType> = (item) => {
  const { type, id } = item;
  const isUser = type === 'user';
  const favouriteSettings: FavSettings = {
    dataUrl: `favourites/${isUser ? 'users' : 'companies'}/:id`,
    storeName: isUser ? 'favouriteUsers' : 'favouriteCompanies',
  };
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  // сделать инфу о просмотрах, лайках и тд
  // ускорить ответ от авторизации

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
    </div>
  );
};

export default UserPage;
