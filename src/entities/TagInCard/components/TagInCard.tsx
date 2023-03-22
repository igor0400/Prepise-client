import classNames from 'classnames';
import { FC, useMemo } from 'react';
import { CustomTag } from '../../../shared';
import { FilterItem } from '../../../widgets/main-page/MainContentFrame';

interface Props {
  id: string;
  name: string;
  className?: string;
  activeTags?: FilterItem[];
}

const TagInCard: FC<Props> = ({ name, id, activeTags, className }) => {
  const isActive = useMemo(() => {
    if (!activeTags) return false;

    for (let tag of activeTags) {
      if (tag.id === +id) return true;
    }

    return false;
  }, [activeTags]);

  return (
    <CustomTag
      label={name}
      className={classNames('w-fit', {
        [className ?? '']: className,
        'border border-blue-600': isActive,
      })}
    />
  );
};

export default TagInCard;
