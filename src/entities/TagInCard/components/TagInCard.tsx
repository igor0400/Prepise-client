import { Tag, TagLabel } from '@chakra-ui/react';
import classNames from 'classnames';
import { FC, useMemo } from 'react';

interface Props {
  id: string;
  name: string;
  className?: string;
  activeTags?: string[];
}

const TagInCard: FC<Props> = ({ name, id, activeTags, className }) => {
  const isActive = useMemo(() => {
    if (!activeTags) return false;

    for (let tag of activeTags) {
      if (tag === id) return true;
    }

    return false;
  }, [activeTags]);

  return (
    <Tag
      borderRadius="full"
      variant="solid"
      colorScheme="green"
      className={classNames('w-fit', {
        [className ?? '']: className,
        'border border-blue-600': isActive,
      })}
      style={{ background: 'rgba(27, 165, 33, 0.1)', color: '#000' }}
    >
      <TagLabel>{name}</TagLabel>
    </Tag>
  );
};

export default TagInCard;
