import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../entities/User';
import { useRequest } from '../../../shared';
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
      const data = await request(deleteFollowing, true, [String(authorId)]);

      if (data) {
        dispatch(
          deleteItem({
            itemId: authorId,
            sectionName: 'followingUsers',
          }),
        );
      }
    }
  };

  return <Btn onClick={onClick} loading={loading} />;
};

export default UnfollowBtn;
