import { Spinner, useMediaQuery } from '@chakra-ui/react';
import { FC, MouseEventHandler } from 'react';
import { OutlineBtn } from '../../../shared';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
}

const UserPageFollowBtn: FC<Props> = ({ onClick, loading }) => {
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  return (
    <OutlineBtn
      onClick={onClick}
      className="text-xs sm:text-sm py-[4px] px-[10px] sm:px-2"
      bg="green"
    >
      {loading ? (
        <Spinner
          size={isLargerThan640 ? 'sm' : 'xs'}
          className="mx-[36px] sm:mx-[41px] my-0.5"
        />
      ) : (
        'Подписаться'
      )}
    </OutlineBtn>
  );
};

export default UserPageFollowBtn;
