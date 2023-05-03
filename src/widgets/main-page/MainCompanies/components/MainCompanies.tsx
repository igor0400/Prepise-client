import { FC } from 'react';
import UserCard from '../../../../entities/UserCard';
import MainEntityFrame from '../../MainEntityFrame';

const MainCompanies: FC = () => {
  return (
    <MainEntityFrame
      name="companies"
      title="Компании"
      description="Это список зарегистрированных компаний. Вы можете подписаться на компанию, перейдя в её профиль, и следить за её деятельностью и предложениями о работе."
      ItemCard={UserCard}
      itemsName="компаний"
      itemsUrl="companies"
      favouriteSettings={{
        storeName: 'favouriteCompanies',
        dataUrl: 'favourites/companies/:id',
      }}
      searchPlaceholder="Поиск по тегам..."
    />
  );
};

export default MainCompanies;
