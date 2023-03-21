import { FC } from 'react';
import MainQuestions from '../../MainQuestions';

interface Tab {
  [key: string]: FC<any>;
}

export const tabsContent: Tab = {
  questions: MainQuestions,
};
