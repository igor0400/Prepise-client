import notify from 'public/images/icons/notify.svg';
import userInfo from 'public/images/icons/user-info.svg';
import stats from 'public/images/icons/stats.svg';

interface Tab {
  name: string;
  icon: any;
}

export const tabs: Tab[][] = [
  [
    {
      name: 'Уведомления',
      icon: notify,
    },
  ],
  [
    {
      name: 'Личная информация',
      icon: userInfo,
    },
    {
      name: 'Статистика',
      icon: stats,
    },
  ],
  [
    {
      name: 'Мои вопросы',
      icon: userInfo, // прописать норм пути
    },
    {
      name: 'Мои тесты',
      icon: stats,
    },
    {
      name: 'Мои блоки',
      icon: userInfo,
    },
    {
      name: 'Мои блоки тестов',
      icon: stats,
    },
  ],
];
