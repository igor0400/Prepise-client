import React, { FC } from 'react';
import { useTypedSelector } from '../../../shared';

const Profile: FC = () => {
  const user = useTypedSelector((state) => state.user.data);

  if (!user) return <div></div>;

  return (
    <div className="py-5">
      <p className="font-bold"> Профиль {user.name}</p>
      <p>Вся инфа: {JSON.stringify(user)}</p>
    </div>
  );
};

export default Profile;
