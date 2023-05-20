import { Fade, useMediaQuery } from '@chakra-ui/react';
import { FC } from 'react';
import { BlockType } from '../../Block';
import ItemCard from '../../ItemCard';
import { QuestionType } from '../../Question';
import ShowMoreBtn from '../../ShowMoreBtn';
import { UserItems } from '../../User';
import FavouriteIconBtn from '../../../features/FavouriteIconBtn';
import { CenteredLoader, EmptyItems } from '../../../shared';

interface Props {
  items: QuestionType[] | BlockType[];
  itemsLoading: boolean;
  favouriteSettings: {
    storeName: UserItems;
    dataUrl: string;
  };
  itemCardLink: string;
  more: {
    loading: boolean;
    disabled: boolean;
    getItems: Function;
  };
}

const UserItemsFrame: FC<Props> = ({
  items,
  favouriteSettings,
  itemCardLink,
  more,
  itemsLoading,
}) => {
  const [isSmallerThan641] = useMediaQuery('(max-width: 641px)');
  const { loading, disabled, getItems } = more;

  if (itemsLoading) return <CenteredLoader className="my-16" />;

  if (items?.length < 1) return <EmptyItems />;

  return (
    <div>
      <Fade in className="w-full flex flex-col gap-2 sm:gap-3 2xl:gap-4">
        {items.map((item) => (
          <ItemCard
            compact
            link={itemCardLink}
            {...item}
            favouriteBtn={
              <FavouriteIconBtn
                size={isSmallerThan641 ? 'small' : 'big'}
                item={item}
                {...favouriteSettings}
              />
            }
            size={isSmallerThan641 ? 'small' : 'big'}
            key={item.id}
          />
        ))}
      </Fade>
      {!disabled && <ShowMoreBtn onClick={getItems} loading={loading} />}
    </div>
  );
};

export default UserItemsFrame;
