import { useMemo } from 'react';
import { useTypedSelector } from '../../../../shared';

export const useIsDefaultAvatar = () => {
  const { data } = useTypedSelector((state) => state.user);

  const isDefault = useMemo(
    () => data?.avatar && data.avatar.split('/')[2] === 'default',
    [data],
  );

  return isDefault;
};
