import { Avatar, Card, CardBody } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { getFileUrl, useRequest } from '../../../shared';
import { UserType } from '../../User';
import { getUser } from '../lib/api/getUser';

interface Props {
  userId: number;
}

const UserInItemPageCard: FC<Props> = ({ userId }) => {
  const [user, setUser] = useState<null | UserType>(null);
  const { request } = useRequest();

  useEffect(() => {
    setUserData();
  }, []);

  async function setUserData() {
    const data = await request(getUser, true, userId);
    if (data) setUser(data);
  }

  if (!user) return <></>;

  const { avatar, id, name } = user;
  name;
  return (
    <Card className="w-fit">
      <Link href={`/users/${id}`}>
        <CardBody className="py-2 px-4 sm:py-3 sm:px-5 flex items-center">
          <Avatar className="w-8 sm:w-10 h-8 sm:h-10" name={name} src={getFileUrl(avatar)} />
          <h3 className="font-semibold text-sm sm:text-base pl-2">{name}</h3>
        </CardBody>
      </Link>
    </Card>
  );
};

export default UserInItemPageCard;
