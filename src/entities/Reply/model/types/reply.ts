export interface ReplyType {
  id: number;
  testQuestionInfoId: number;
  authorId: number;
  text: string;
  accepted: boolean;
  files: [];
  testQuestionInfo: any;
  createdAt: string;
  updatedAt: string;
}
