import { QuestionType } from '../../../Question';
import { UserType } from '../../../User';

export interface BlockType {
  id: number;
  authorId: number;
  title: string;
  type: 'default' | 'test';
  description: string;
  content: string;
  commented: boolean;
  section: string;
  likes: number;
  dislikes: number;
  viewes: number;
  testBlockInfo: any;
  questions: QuestionType[];
  banned: any;
  usedUsersInfo: any[];
  comments: any[];
  tags: any[];
  user: UserType;
  createdAt: string;
  updatedAt: string;
}
