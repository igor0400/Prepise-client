import Image from 'next/image';
import { FC, useMemo } from 'react';
import favouriteInline from '../../../../public/images/icons/fvourite-inline.svg';
import favouriteFilled from '../../../../public/images/icons/fvourite-filled.svg';
import { useRequest, useTypedSelector } from '../../../shared';
import { useRouter } from 'next/router';
import { postFavourite } from '../lib/api/postFavourite';
import { deleteFavourite } from '../lib/api/deleteFavourite';
import { QuestionType } from '../../../entities/Question';
import {
  addFavourite as storeAddFavourite,
  deleteFavourite as storeDeleteFavourite,
} from '../../../entities/User';
import { useDispatch } from 'react-redux';
import { Spinner } from '@chakra-ui/react';

const FavouriteIconBtn: FC<QuestionType> = (question) => {
  const router = useRouter();
  const { request, loading } = useRequest();
  const dispatch = useDispatch();
  const { data, isAuth } = useTypedSelector((state) => state.user);
  const favouriteQuestions = data?.favouriteQuestions;
  const { id: qId } = question;

  const isFavourite = useMemo(() => {
    if (favouriteQuestions) {
      for (let item of favouriteQuestions) {
        if (item.id === qId) return true;
      }
    }

    return false;
  }, [favouriteQuestions]);

  const addFavourite = async () => {
    if (!isAuth) {
      router.push({ pathname: '/auth/login', query: { redirect: 'main' } });
    }

    if (isFavourite) {
      const data = await request(deleteFavourite, true, qId);

      if (data) dispatch(storeDeleteFavourite(qId));
    } else {
      const data = await request(postFavourite, true, qId);

      if (data) dispatch(storeAddFavourite(question));
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
