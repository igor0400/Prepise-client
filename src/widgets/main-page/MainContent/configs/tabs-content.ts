import { FC } from 'react';
import MainBlockQuestions from '../../MainBlockQuestions';
import MainQuestions from '../../MainQuestions';

interface Tab {
  [key: string]: FC<any>;
}

export const tabsContent: Tab = {
  questions: MainQuestions,
  'blocks-questions': MainBlockQuestions,
};
