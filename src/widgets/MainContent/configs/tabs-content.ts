import { FC } from 'react';
import Questions from '../../Questions';

interface Tab {
  [key: string]: FC<any>;
}

export const tabsContent: Tab = {
  questions: Questions,
};
