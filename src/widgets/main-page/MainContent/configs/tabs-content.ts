import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import MainBlockQuestions from '../../MainBlockQuestions';
import MainBlockTests from '../../MainBlockTests';
import MainQuestions from '../../MainQuestions';
import MainTests from '../../MainTests';

interface Tab {
  [key: string]: FC<any>;
}

export const tabsContent: Tab = {
  questions: MainQuestions,
  'blocks-questions': MainBlockQuestions,
  tests: MainTests,
  'blocks-tests': MainBlockTests,
  tags: Box,
  users: Box,
  companies: Box,
};
