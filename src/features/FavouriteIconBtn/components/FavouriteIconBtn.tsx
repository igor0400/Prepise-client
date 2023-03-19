import Image from 'next/image';
import { FC, useMemo } from 'react';
import favouriteInline from '../../../../public/images/icons/fvourite-inline.svg';
import favouriteFilled from '../../../../public/images/icons/fvourite-filled.svg';
import { useTypedSelector } from '../../../shared';
import { useRouter } from 'next/router';

interface Props {
  questionId: number;
}

const FavouriteIconBtn: FC<Props> = ({ questionId }) => {
  const router = useRouter();
  const { data, isAuth } = useTypedSelector((state) => state.user);
  const favouriteQuestions = data?.favouriteQuestions;

  const isFavourite = useMemo(() => {
    if (favouriteQuestions) {
      for (let item of favouriteQuestions) {
        if (item.id === questionId) return true;
      }
    }

    return false;
  }, favouriteQuestions);

  const addFavourite = () => {
    if (!isAuth)
      router.push({ pathname: '/auth/login', query: { redirect: 'main' } });

    // тут сделать добавление в избранное!!!!!!!!!!!!!!!!!!!!!
    console.log('add favourite');
  };

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
