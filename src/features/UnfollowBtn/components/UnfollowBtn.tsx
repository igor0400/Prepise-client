import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useRequest } from '../../../shared';
import { deleteFollowing as storeDeleteFollowing } from '../../../entities/User';
import { deleteFollowing } from '../lib/api/deleteFollowing';

interface Props {
  authorId: number;
  Btn: Function;
}

const UnfollowBtn: FC<Props> = ({ authorId, Btn }) => {
  const { request, loading } = useRequest(true, true);
  const dispatch = useDispatch();

  const onClick = async () => {
    if (!loading) {
      const data = await request(deleteFollowing, true, authorId);

      if (data) {
        dispatch(storeDeleteFollowing(authorId));
      }
    }
  };

  return <Btn onClick={onClick} loading={loading} />;
};

export default UnfollowBtn;
