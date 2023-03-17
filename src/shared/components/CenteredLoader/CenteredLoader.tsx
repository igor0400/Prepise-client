import { Spinner, useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';
import { FC } from 'react';

interface Props {
  className?: string;
}

const CenteredLoader: FC<Props> = ({ className }) => {
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  return (
    <div
      className={classNames('flex w-full h-full items-center justify-center', {
        [className ?? '']: className,
      })}
      style={{
        height: `calc(100vh - ${isLargerThan640 ? 80 : 65}px)`,
        width: '100%',
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
