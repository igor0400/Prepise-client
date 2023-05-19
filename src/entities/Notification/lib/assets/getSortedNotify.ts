import { NotificationType } from '../../model/types/notification';

export const getSortedNotify = (notify: NotificationType[]) => {
  const old = [];
  const yang = [];

  for (let i of notify) {
    if (i.viewed) {
      old.push(i);
    } else {
      yang.push(i);
    }
  }

  return { old, yang };
};
