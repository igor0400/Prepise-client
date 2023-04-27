import { FC } from 'react';
import { UserItems, UserType } from '../../../entities/User';
import UserPageInfo from '../../../entities/UserPageInfo';
import FavouriteIconBtn from '../../../features/FavouriteIconBtn';

interface FavSettings {
  storeName: UserItems;
  dataUrl: string;
}

const UserPage: FC<UserType> = (item) => {
  const { name, avatar, location, connection, type } = item;
  const isUser = type === 'user';
  const favouriteSettings: FavSettings = {
    dataUrl: `favourites/${isUser ? 'users' : 'companies'}/:id`,
    storeName: isUser ? 'favouriteUsers' : 'favouriteCompanies',
  };

  return (
    <div className="max-w-3xl mx-auto pt-8 sm:pt-14 pb-20 sm:pb-28">
      <UserPageInfo
        name={name}
        avatar={avatar}
        location={location}
        online={connection?.online}
        favouriteBtn={
          <FavouriteIconBtn
            item={item}
            {...favouriteSettings}
            // size={isLargerThan768 ? 17 : 15}
          />
        }
        followBtn={
          <button>Подписаться</button>
        }
      />
    </div>
  );
};

export default UserPage;
