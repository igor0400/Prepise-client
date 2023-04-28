import { Spinner, useMediaQuery } from '@chakra-ui/react';
import { FC, MouseEventHandler } from 'react';
import { OutlineBtn } from '../../../shared';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
}

const UserPageUnfollowBtn: FC<Props> = ({ onClick, loading }) => {
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  return (
    <OutlineBtn
      onClick={onClick}
      className="text-xs sm:text-sm py-[4px] px-[10px] sm:px-2"
      bg="gray"
    >
      {loading ? (
        <Spinner
          size={isLargerThan640 ? 'sm' : 'xs'}
          className="mx-[31px] sm:mx-[35px] my-0.5"
        />
      ) : (
        'Отписаться'
      )}
    </OutlineBtn>
  );
};

export default UserPageUnfollowBtn;
