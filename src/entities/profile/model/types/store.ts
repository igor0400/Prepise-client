import { BlockType } from '../../../Block';
import { PostType } from '../../../Post';
import { QuestionType } from '../../../Question';

type Items<T> = T[] | null;
interface Data<T> {
  items: Items<T>;
  allItems: Items<T>;
  offset: number;
  moreDisabled: boolean;
}

export interface ProfileState {
  navbar: {
    activeTab: string;
  };
  questions: Data<QuestionType>;
  blocks: Data<BlockType>;
  tests: Data<QuestionType>;
  testBlocks: Data<BlockType>;
  posts: Data<PostType>;
}
