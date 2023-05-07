import { BlockType } from '../../../Block';
import { QuestionType } from '../../../Question';

interface Items<T> {
  items: T[];
  allItems: T[];
}

export interface SearchState {
  value: string;
  questions: Items<QuestionType>;
  blocksQuestions: Items<BlockType>;
  tests: Items<QuestionType>;
  blocksTests: Items<BlockType>;
}
