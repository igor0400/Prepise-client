import { CloseIcon } from '@chakra-ui/icons';
import { Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { getParseDate, useRequest } from '../../../shared';
import { deleteItem } from '../../User';
import { deleteNotify } from '../lib/api/deleteNotify';
import { NotificationType } from '../model/types/notification';

const Notification: FC<NotificationType> = ({ id, text, link, createdAt }) => {
  const { request, loading } = useRequest(true, true);
  const dispatch = useDispatch();
  const date = getParseDate(createdAt);

  const handleDelete = async () => {
    const data = await request(deleteNotify, true, id);

    if (data) {
      dispatch(deleteItem({ sectionName: 'notifications', itemId: id }));
    }
  };

  return (
    <div className="rounded-md bg-gray-200 shadow-md p-3">
      <div className="flex justify-between items-start">
        <p className="text-xs">{date}</p>
        {loading ? (
          <Spinner size="xs" />
        ) : (
          <CloseIcon
            style={{ width: 12, height: 12 }}
            className="cursor-pointer"
            onClick={handleDelete}
          />
        )}
      </div>
      <div className="flex gap-1">
        <p>{text}</p>
        {link && (
          <Link href={link} className="text-blue-500">
            Смотреть
          </Link>
        )}
      </div>
    </div>
  );
};

export default Notification;
