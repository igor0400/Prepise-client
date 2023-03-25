import { FC } from 'react';
import MainBlockQuestions from '../../MainBlockQuestions';
import MainBlockTests from '../../MainBlockTests';
import MainCompanies from '../../MainCompanies';
import MainQuestions from '../../MainQuestions';
import MainTags from '../../MainTags';
import MainTests from '../../MainTests';
import MainUsers from '../../MainUsers';

interface Tab {
  [key: string]: FC<any>;
}

export const tabsContent: Tab = {
  questions: MainQuestions,
  'blocks-questions': MainBlockQuestions,
  tests: MainTests,
  'blocks-tests': MainBlockTests,
  tags: MainTags,
  users: MainUsers,
  companies: MainCompanies,
};
