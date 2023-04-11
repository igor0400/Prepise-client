import { CommentReplyType } from '../../../CommentReply';
import { UserType } from '../../../User';

export interface CommentType {
  id: number;
  questionId: number;
  authorId: number;
  text: string;
  replies: CommentReplyType[];
  user: UserType;
  createdAt: string;
  updatedAt: string;
}
