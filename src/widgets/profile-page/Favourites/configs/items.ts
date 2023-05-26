import { UserSections } from '../../../../entities/User';

export const itemsNames: { [key: string]: UserSections } = {
  questions: 'favouriteQuestions',
  tests: 'favouriteTestQuestions',
  blocks: 'favouriteBlocks',
  testBlocks: 'favouriteTestBlocks',
  users: 'favouriteUsers',
  companies: 'favouriteCompanies',
};

export const itemsLinks = {
  questions: 'questions',
  tests: 'tests',
  blocks: 'questions-blocks',
  testBlocks: 'tests-blocks',
  users: 'users',
  companies: 'companies',
};
