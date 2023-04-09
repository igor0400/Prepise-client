import { UserType } from './user';

export type UserItems =
  | 'tags'
  | 'followingTags'
  | 'ignoringTags'
  | 'followingUsers'
  | 'posts'
  | 'interviewes'
  | 'favouriteQuestions'
  | 'favouriteTestQuestions'
  | 'favouriteBlocks'
  | 'favouriteTestBlocks'
  | 'favouriteUsers'
  | 'favouriteCompanies'
  | 'favouriteTags';

export interface UserState {
  isAuth: boolean;
  data: UserType | null;
  loading: boolean;
}

export interface AddFavourite {
  item: any;
  sectionName: UserItems;
}

export interface DeleteFavourite {
  itemId: number;
  sectionName: UserItems;
}
