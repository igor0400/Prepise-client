import { Spinner } from '@chakra-ui/react';
import classNames from 'classnames';
import { CSSProperties, FC } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

const CenteredLoader: FC<Props> = ({ className, style }) => {
  return (
    <div
      className={classNames('flex items-center justify-center w-full', {
        [className ?? '']: className,
      })}
      style={style}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </div>
  );
};

export default CenteredLoader;
