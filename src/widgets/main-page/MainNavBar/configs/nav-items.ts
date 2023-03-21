import { FC } from 'react';
import {
  BlockQuestionIcon,
  QuestionIcon,
  PaperIcon,
  BlockPapersIcon,
  TagIcon,
  UserIcon,
  CompanyIcon,
} from '../../../../shared';

export const navItems: { Icon: FC<any>; text: string; search: string }[] = [
  { Icon: QuestionIcon, text: 'Вопросы', search: 'questions' },
  {
    Icon: BlockQuestionIcon,
    text: 'Блоки вопросов',
    search: 'blocks-questions',
  },
  {
    Icon: PaperIcon,
    text: 'Тесты',
    search: 'tests',
  },
  {
    Icon: BlockPapersIcon,
    text: 'Блоки тестов',
    search: 'blocks-tests',
  },
  {
    Icon: TagIcon,
    text: 'Теги',
    search: 'tags',
  },
  {
    Icon: UserIcon,
    text: 'Пользователи',
    search: 'users',
  },
  {
    Icon: CompanyIcon,
    text: 'Компании',
    search: 'companies',
  },
];
