import { UserSections } from '../../../../entities/User';

export const itemsNames: { [key: string]: UserSections } = {
  questions: 'favouriteQuestions',
  tests: 'favouriteTestQuestions',
  blocks: 'favouriteBlocks',
  testBlocks: 'favouriteTestBlocks',
  users: 'favouriteUsers',
  companies: 'favouriteCompanies',
  tags: 'favouriteTags',
};

export const itemsLinks = {
  questions: 'questions',
  tests: 'tests',
  blocks: 'questions-blocks',
  testBlocks: 'tests-blocks',
  users: 'users',
  companies: 'companies',
  tags: '',
};

export const selectOptions = [
  { value: 'questions', label: 'Вопросы' },
  { value: 'tests', label: 'Тесты' },
  { value: 'blocks', label: 'Блоки' },
  { value: 'testBlocks', label: 'Блоки тестов' },
  { value: 'users', label: 'Пользователи' },
  { value: 'companies', label: 'Компании' },
  { value: 'tags', label: 'Теги' },
];
