import React, { FC } from 'react';
import ProfileReply from '../../../../entities/ProfileReply';
import { ReplyType } from '../../../../entities/Reply';
import { EmptyItems } from '../../../../shared';

interface Props {
  items: ReplyType[];
}

const ProfileReplies: FC<Props> = ({ items }) => {
  if (!items.length) return <EmptyItems />;

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <ProfileReply key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProfileReplies;
