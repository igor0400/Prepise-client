import Link from 'next/link';
import type { MenuProps } from 'antd';

interface Item {
  link: string;
  text: string;
  classes?: string;
}

const clearItems: Item[] = [
  {
    link: '/create/question',
    text: 'Опубликовать вопрос',
  },
  {
    link: '/create/questions-block',
    text: 'Опубликовать блок вопросов',
  },
  {
    link: '/create/test',
    text: 'Опубликовать тест',
  },
  {
    link: '/create/tests-block',
    text: 'Опубликовать блок тестов',
  },
];

export const items = (isAuth: boolean): MenuProps['items'] => {
  const isAuthItems: Item[] = isAuth
    ? [
        {
          link: '/profile',
          text: 'Профиль',
          classes: 'text-green-600',
        },
      ]
    : [
        {
          link: '/login',
          text: 'Вход',
          classes: 'text-green-600',
        },
        {
          link: '/register',
          text: 'Регистрация',
        },
      ];

  return clearItems.concat(isAuthItems).map(({ link, text, classes }, i) => ({
    key: i,
    label: (
      <Link href={link}>
        <p className={'py-1 px-0.5 font-medium text-base ' + (classes ?? '')}>
          {text}
        </p>
      </Link>
    ),
  }));
};

const clearCreateItems: Item[] = [
  {
    link: '/create/question',
    text: 'Вопрос',
  },
  {
    link: '/create/questions-block',
    text: 'Блок вопросов',
  },
  {
    link: '/create/test',
    text: 'Тест',
  },
  {
    link: '/create/tests-block',
    text: 'Блок тестов',
  },
];

export const createItems: MenuProps['items'] = clearCreateItems.map(
  ({ link, text, classes }, i) => ({
    key: i,
    label: (
      <Link href={link}>
        <p className={'py-1 px-0.5 font-medium text-base ' + (classes ?? '')}>
          {text}
        </p>
      </Link>
    ),
  }),
);
