import { Spinner } from '@chakra-ui/react';
import { FC, MouseEventHandler } from 'react';
import { InlineBtn } from '../../../shared';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
}

const InlineUnfollowBtn: FC<Props> = ({ onClick, loading }) => {
  return (
    <InlineBtn onClick={onClick} border="blue" className="text-sm sm:text-base">
      {loading ? (
        <Spinner size="sm" className="mx-20" />
      ) : (
        'Отписаться от автора'
      )}
    </InlineBtn>
  );
};

export default InlineUnfollowBtn;
