import { UserType } from '../../../entities/User';

export interface ResponseUserData {
  user: UserType;
  accessToken: string;
}
