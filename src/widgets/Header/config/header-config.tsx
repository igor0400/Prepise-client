import Link from 'next/link';
import type { MenuProps } from 'antd';

const clearItems: { link: string; text: string; classes?: string }[] = [
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

export const items: MenuProps['items'] = clearItems.map(
  ({ link, text, classes }, i) => ({
    key: i,
    label: (
      <Link href={link}>
        <p className={'py-1 px-0.5 font-medium text-base ' + (classes ?? '')}>{text}</p>
      </Link>
    ),
  }),
);
