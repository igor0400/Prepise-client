import { Tag, TagLabel } from '@chakra-ui/react';
import classNames from 'classnames';
import { FC } from 'react';

interface Props {
  tags: string[];
  className?: string;
}

const TagsInCard: FC<Props> = ({ tags, className }) => {
  return (
    <>
      {tags.map((name, i) => (
        <Tag
          key={i}
          borderRadius="full"
          variant="solid"
          colorScheme="green"
          className={classNames('w-fit', {
            [className ?? '']: className,
          })}
          style={{ background: 'rgba(27, 165, 33, 0.1)', color: '#000' }}
        >
          <TagLabel>{name}</TagLabel>
        </Tag>
      ))}
    </>
  );
};

export default TagsInCard;
