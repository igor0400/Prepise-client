import { BlockType } from '../../../Block';
import { QuestionType } from '../../../Question';
import { TagType } from '../../../Tag';
import { UserType } from '../../../User';

export interface MainPageState {
  questions: QuestionType[] | null;
  blockQuestions: BlockType[] | null;
  tests: QuestionType[] | null;
  blockTests: BlockType[] | null;
  tags: TagType[] | null;
  users: UserType[] | null;
  companies: UserType[] | null;
}
