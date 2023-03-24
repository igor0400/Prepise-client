import { UserType } from './user';

export type UserFavourites =
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
  sectionName: UserFavourites;
}

export interface DeleteFavourite {
  itemId: number;
  sectionName: UserFavourites;
}
