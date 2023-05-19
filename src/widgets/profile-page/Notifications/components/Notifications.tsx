import React, { FC, useEffect } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import notify from 'public/images/icons/notify-bold.svg';
import { EmptyItems, useRequest, useTypedSelector } from '../../../../shared';
import Notification, {
  getSortedNotify,
  NewLine,
} from '../../../../entities/Notification';
import { changeView } from '../lib/api/changeView';

const Notifications: FC = () => {
  const user = useTypedSelector((state) => state.user.data);
  const items = user?.notifications;
  const { old, yang } = getSortedNotify(items ?? []);
  const { request } = useRequest(true);

  useEffect(() => {
    setView();
  }, []);

  async function setView() {
    for (let { id } of yang) {
      await request(changeView, false, id);
    }
  }

  return (
    <ProfileContentWrapper title="Уведомления" icon={notify} iconSize={23}>
      {items?.length ? (
        <div>
          {yang.length !== 0 && (
            <>
              <NewLine className="mb-2" />

              <div className="flex flex-col gap-3">
                {yang.map((item) => (
                  <Notification key={item.id} {...item} />
                ))}
              </div>

              <div className="w-full bg-red-500 h-0.5 rounded-full mt-4 mb-4"></div>
            </>
          )}
          {old.length !== 0 && (
            <div className="flex flex-col gap-3">
              {old.map((item) => (
                <Notification key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <EmptyItems />
      )}
    </ProfileContentWrapper>
  );
};

export default Notifications;
