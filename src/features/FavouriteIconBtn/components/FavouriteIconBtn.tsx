import Image from 'next/image';
import { FC, useMemo } from 'react';
import favouriteInline from '../../../../public/images/icons/fvourite-inline.svg';
import favouriteFilled from '../../../../public/images/icons/fvourite-filled.svg';
import { useRequest, useTypedSelector } from '../../../shared';
import { useRouter } from 'next/router';
import { postFavourite } from '../lib/api/postFavourite';
import { deleteFavourite } from '../lib/api/deleteFavourite';
import {
  addFavourite as storeAddFavourite,
  deleteFavourite as storeDeleteFavourite,
  UserFavourites,
} from '../../../entities/User';
import { useDispatch } from 'react-redux';
import { Spinner } from '@chakra-ui/react';

interface Props {
  item: any;
  storeName: UserFavourites;
  dataUrl: string;
}

const FavouriteIconBtn: FC<Props> = ({ item, storeName, dataUrl }) => {
  const router = useRouter();
  const { request, loading } = useRequest();
  const dispatch = useDispatch();
  const { data, isAuth } = useTypedSelector((state) => state.user);
  const favouriteItems: any = data && data[storeName] ? data[storeName] : [];
  const { id: iId } = item;

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
      router.push({
        pathname: '/auth/login',
        query: { redirect: router.pathname.slice(1) },
      });
      return;
    }

    const url = dataUrl.replaceAll(':id', iId);

    if (isFavourite) {
      const data = await request(deleteFavourite, true, url);

      if (data)
        dispatch(storeDeleteFavourite({ sectionName: storeName, itemId: iId }));
    } else {
      const data = await request(postFavourite, true, url);

      if (data) dispatch(storeAddFavourite({ sectionName: storeName, item }));
    }
  };

  if (loading) return <Spinner size="sm" />;

  return (
    <Image
      src={isFavourite ? favouriteFilled : favouriteInline}
      alt="favourite"
      width={15}
      height={15}
      className="cursor-pointer"
      onClick={addFavourite}
    />
  );
};

export default FavouriteIconBtn;
