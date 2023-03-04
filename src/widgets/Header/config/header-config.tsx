import Link from 'next/link';
import type { MenuProps } from 'antd';
import classNames from 'classnames';

interface Item {
  link: string;
  text: string;
  className?: string;
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
          className: 'text-green-600',
        },
      ]
    : [
        {
          link: '/login',
          text: 'Вход',
          className: 'text-green-600',
        },
        {
          link: '/register',
          text: 'Регистрация',
        },
      ];

  return clearItems.concat(isAuthItems).map(({ link, text, className }, i) => ({
    key: i,
    label: (
      <Link href={link}>
        <p
          className={classNames('py-1 px-0.5 font-medium text-base', {
            className,
          })}
        >
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
  ({ link, text, className }, i) => ({
    key: i,
    label: (
      <Link href={link}>
        <p
          className={classNames('py-1 px-0.5 font-medium text-base', {
            className,
          })}
        >
          {text}
        </p>
      </Link>
    ),
  }),
);
