import { UserType } from '../../../entities/user';

export interface ResponseUserData {
  user: UserType;
  accessToken: string;
}
