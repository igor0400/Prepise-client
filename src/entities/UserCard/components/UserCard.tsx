import { Avatar, Card, CardBody } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { UserType } from '../../User/model/types/user';
import { getStringTags, sliceText } from '../../../shared';
import Link from 'next/link';

interface Props {
  favouriteBtn: ReactNode;
  item: UserType;
}

const UserCard: FC<Props> = ({ favouriteBtn, item }) => {
  const { id, name, location, avatar, tags, description, type } = item;

  return (
    <Card>
      <CardBody>
        <div className="flex justify-between items-start">
          <Link href={type === 'user' ? `/users/${id}` : `/companies/${id}`}>
            <div className="flex">
              <Avatar
                className="w-14 h-14"
                name={name}
                src={`${process.env.NEXT_PUBLIC_SERVER}${avatar}`}
              />
              <div className="pl-2">
                <h3 className="font-semibold text-lg">{name}</h3>
                {location && (
                  <p className="text-gray-500 text-xs">{location}</p>
                )}
              </div>
            </div>
          </Link>

          {favouriteBtn}
        </div>

        {description && (
          <p className="pt-2 font-medium text-sm">
            {sliceText(description, 60)}
          </p>
        )}

        <p className="text-blue-500 text-end text-md">
          {getStringTags(tags, 20)}
        </p>
      </CardBody>
    </Card>
  );
};

export default UserCard;
