import Image from 'next/image';
import { FC, MouseEvent, useMemo } from 'react';
import favouriteInline from '../../../../public/images/icons/fvourite-inline.svg';
import favouriteFilled from '../../../../public/images/icons/fvourite-filled.svg';
import { useRequest, useTypedSelector } from '../../../shared';
import { postFavourite } from '../lib/api/postFavourite';
import { deleteFavourite } from '../lib/api/deleteFavourite';
import {
  addItem as storeAddFavourite,
  deleteItem as storeDeleteFavourite,
  UserItems,
} from '../../../entities/User';
import { useDispatch } from 'react-redux';
import { Spinner } from '@chakra-ui/react';
import { QuestionType } from '../../../entities/Question';
import { BlockType } from '../../../entities/Block';

interface Props {
  item: QuestionType | BlockType;
  storeName: UserItems;
  dataUrl: string;
  size?: 'big' | 'small' | number;
}

const FavouriteIconBtn: FC<Props> = ({
  item,
  storeName,
  dataUrl,
  size = 'big',
}) => {
  const { request, loading } = useRequest(true, true);
  const dispatch = useDispatch();
  const { data } = useTypedSelector((state) => state.user);

  const favouriteItems: any = data && data[storeName] ? data[storeName] : [];
  const { id: iId } = item;
  const iconSize = typeof size === 'number' ? size : size === 'big' ? 15 : 13;

  const isFavourite = useMemo(() => {
    if (favouriteItems) {
      for (let fvtItem of favouriteItems) {
        if (fvtItem.id === iId) return true;
      }
    }

    return false;
  }, [favouriteItems]);

  const addItem = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const url = dataUrl.replaceAll(':id', String(iId));

    if (isFavourite) {
      const data = await request(deleteFavourite, true, url);

      if (data)
        dispatch(storeDeleteFavourite({ sectionName: storeName, itemId: iId }));
    } else {
      const data = await request(postFavourite, true, url);

      if (data) dispatch(storeAddFavourite({ sectionName: storeName, item }));
    }
  };

  if (loading)
    return (
      <div
        className="flex items-center justify-center"
        style={{ width: iconSize, height: iconSize }}
      >
        <Spinner size="sm" />
      </div>
    );

  return (
    <Image
      src={isFavourite ? favouriteFilled : favouriteInline}
      alt="favourite"
      width={iconSize}
      height={iconSize}
      className="cursor-pointer"
      onClick={addItem}
    />
  );
};

export default FavouriteIconBtn;
