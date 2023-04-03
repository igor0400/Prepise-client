import { FC } from 'react';
import TagCard from '../../../../entities/TagCard';
import MainEntityFrame from '../../MainEntityFrame';

const MainTags: FC = () => {
  return (
    <MainEntityFrame
      title="Теги"
      description="Тег - это ключевое слово или словосочетание, которое помогает понять тему вашего вопроса или блока. Использование правильных тегов облегчает другим пользователям поиск и ответ на ваш вопрос."
      ItemCard={TagCard}
      itemsName="тегов"
      itemsUrl="tags"
      favouriteSettings={{
        storeName: 'favouriteTags',
        dataUrl: 'favourites/tags/:id',
      }}
      searchPlaceholder="Поиск по тегам..."
    />
  );
};

export default MainTags;
