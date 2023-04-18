export interface QuestionType {
  id: number;
  authorId: number;
  title: string;
  type: 'default' | 'test';
  commented: boolean;
  interviewPosition: string;
  section: string;
  description: string;
  content: string;
  likes: number;
  dislikes: number;
  viewes: number;
  defaultQuestionInfo: any;
  testQuestionInfo: any;
  imgs: any[];
  files: any[];
  banned: any;
  usedUsersInfo: any[];
  comments: any[];
  tags: any[];
  block: any;
  user: any;
  createdAt: string;
  updatedAt: string;
}
