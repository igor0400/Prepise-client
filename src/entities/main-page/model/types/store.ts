import { BlockType } from '../../../Block';
import { QuestionType } from '../../../Question';
import { TagType } from '../../../Tag';
import { UserType } from '../../../User';

type Items<T> = T[] | null;
interface Data<T> {
  items: Items<T>;
  allItems: Items<T>;
  offset: number;
  moreDisabled: boolean;
}

export interface MainPageState {
  questions: Data<QuestionType>;
  blockQuestions: Data<BlockType>;
  tests: Data<QuestionType>;
  blockTests: Data<BlockType>;
  tags: Data<TagType>;
  users: Data<UserType>;
  companies: Data<UserType>;
}
