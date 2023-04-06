import Image from 'next/image';
import { FC, useMemo } from 'react';
import favouriteInline from '../../../../public/images/icons/fvourite-inline.svg';
import favouriteFilled from '../../../../public/images/icons/fvourite-filled.svg';
import { redirectToLogin, useRequest, useTypedSelector } from '../../../shared';
import { useRouter } from 'next/router';
import { postFavourite } from '../lib/api/postFavourite';
import { deleteFavourite } from '../lib/api/deleteFavourite';
import {
  addFavourite as storeAddFavourite,
  deleteFavourite as storeDeleteFavourite,
  UserFavourites,
} from '../../../entities/User';
import { useDispatch } from 'react-redux';
import { Spinner, useToast } from '@chakra-ui/react';
import { QuestionType } from '../../../entities/Question';
import { BlockType } from '../../../entities/Block';

interface Props {
  item: QuestionType | BlockType;
  storeName: UserFavourites;
  dataUrl: string;
  size?: 'big' | 'small' | number;
}

const FavouriteIconBtn: FC<Props> = ({
  item,
  storeName,
  dataUrl,
  size = 'big',
}) => {
  const router = useRouter();
  const toast = useToast();
  const { request, loading } = useRequest();
  const dispatch = useDispatch();
  const { data, isAuth } = useTypedSelector((state) => state.user);
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

  const addFavourite = async () => {
    if (!isAuth) {
      redirectToLogin(toast, router);
      return;
    }

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
      onClick={addFavourite}
    />
  );
};

export default FavouriteIconBtn;
