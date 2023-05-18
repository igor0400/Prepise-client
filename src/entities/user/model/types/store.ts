import { UserType } from './user';

export type UserItems =
  | 'questions'
  | 'blocks'
  | 'tests'
  | 'testBlocks'
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

export type UserSections =
  | 'questions'
  | 'blocks'
  | 'tests'
  | 'testBlocks'
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

export interface AddFavourites {
  items: any[];
  sectionName: UserItems;
}

export interface DeleteFavourite {
  itemId: number;
  sectionName: UserItems;
}
