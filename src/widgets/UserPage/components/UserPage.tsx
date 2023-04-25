import { FC } from 'react';
import { UserType } from '../../../entities/User';

const UserPage: FC<UserType> = ({ name, avatar }) => {
  return <div>{name}</div>;
};

export default UserPage;
