import Link from 'next/link';
import type { MenuProps } from 'antd';

export const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href="/create/question">
        <p className="p-0.5 font-medium text-base">Опубликовать вопрос</p>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href="/create/questions-block">
        <p className="p-0.5 font-medium text-base">
          Опубликовать блок вопросов
        </p>
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href="/create/test">
        <p className="p-0.5 font-medium text-base">Опубликовать тест</p>
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link href="/create/tests-block">
        <p className="p-0.5 font-medium text-base">Опубликовать блок тестов</p>
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link href="/login">
        <p className="p-0.5 font-medium text-base text-green-600">Войти</p>
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link href="/register">
        <p className="p-0.5 font-medium text-base">Регистрация</p>
      </Link>
    ),
  },
];
