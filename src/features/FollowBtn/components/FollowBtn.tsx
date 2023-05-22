import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addFollowing, addItem } from '../../../entities/User';
import { useRequest, useTypedSelector } from '../../../shared';
import { getUser } from '../lib/api/getUser';
import { postFollowing } from '../lib/api/postFollowing';

interface Props {
  authorId: number;
  Btn: Function;
  type: 'user' | 'company';
}

const FollowBtn: FC<Props> = ({ authorId, type, Btn }) => {
  const { request, loading } = useRequest(true, true);
  const dispatch = useDispatch();
  const url = type === 'user' ? 'users' : 'companies';
  const userId = useTypedSelector((state) => state.user.data?.id);

  const onClick = async () => {
    if (!loading) {
      const data = await request(postFollowing, true, authorId);
      if (data) {
        const user = await request(getUser, true, url, authorId);
        if (user) {
          dispatch(
            addFollowing({
              userId: authorId,
              followedUserId: userId ?? 1,
            }),
          );
        }
      }
    }
  };

  return <Btn onClick={onClick} loading={loading} />;
};

export default FollowBtn;
