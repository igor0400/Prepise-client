import { UserType } from '../../../User';

export interface TagType {
  id: number;
  name: string;
  description: string;
  used: number;
  followers: number;
  authorId: number;
  author: UserType;
}
