import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../entities/User';
import { useRequest } from '../../../shared';
import { getUser } from '../lib/api/getUser';
import { postFollowing } from '../lib/api/postFollowing';

interface Props {
  authorId: number;
  Btn: Function;
}

const FollowBtn: FC<Props> = ({ authorId, Btn }) => {
  const { request, loading } = useRequest(true, true);
  const dispatch = useDispatch();

  const onClick = async () => {
    if (!loading) {
      const data = await request(postFollowing, true, [String(authorId)]);
      if (data) {
        const user = await request(getUser, true, authorId);
        if (user) {
          dispatch(addItem({ item: user, sectionName: 'followingUsers' }));
        }
      }
    }
  };

  return <Btn onClick={onClick} loading={loading} />;
};

export default FollowBtn;
