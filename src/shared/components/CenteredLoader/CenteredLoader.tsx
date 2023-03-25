import { Spinner, useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';
import { CSSProperties, FC } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

const CenteredLoader: FC<Props> = ({ className, style }) => {
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  return (
    <div
      className={classNames('flex items-center justify-center', {
        [className ?? '']: className,
      })}
      style={{
        height: `calc(100vh - ${isLargerThan640 ? 80 : 65}px)`,
        width: '100%',
        ...style,
      }}
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
