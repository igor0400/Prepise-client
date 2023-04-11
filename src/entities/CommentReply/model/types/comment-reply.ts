import { UserType } from '../../../User';

export interface CommentReplyType {
  id: number;
  questionCommentId: number;
  authorId: number;
  text: string;
  user: UserType;
  createdAt: string;
  updatedAt: string;
}
