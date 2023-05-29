import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../../../entities/profile';
import { useTypedSelector } from '../../../../shared';
import { contents } from '../configs/contents';

const ProfileContent: FC = () => {
  const activeTab = useTypedSelector((state) => state.profile.navbar.activeTab);
  const content = contents[activeTab] ?? contents.notify;
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const tab = router.query?.tab;

    if (tab) {
      if (!contents[String(tab)]) {
        dispatch(setActiveTab('notify'));
        router.push({ query: { ...router.query, tab: 'notify' } });
      } else {
        dispatch(setActiveTab(String(tab)));
      }
    } else {
      router.push({ query: { ...router.query, tab: activeTab } });
    }
  }, []);

  return content;
};

export default ProfileContent;
