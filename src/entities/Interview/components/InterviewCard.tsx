import Image from 'next/image';
import React, { FC } from 'react';
import { parseDate, useRequest } from '../../../shared';
import { InterviewType } from '../model/types/interview';

import trashIcon from 'public/images/icons/trash.svg';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../User';
import { deleteInterview } from '../lib/api/deleteInterview';
import { Spinner } from '@chakra-ui/react';

const InterviewCard: FC<InterviewType> = ({
  id,
  title,
  date,
  remindDate,
  position,
}) => {
  const { request, loading } = useRequest(true);
  const dispatch = useDispatch();

  const onDelete = async () => {
    const data = await request(deleteInterview, true, id);

    if (data) {
      dispatch(deleteItem({ itemId: id, sectionName: 'interviewes' }));
    }
  };

  return (
    <div className="p-4 shadow rounded-md">
      <div className="flex justify-between">
        <h4 className="text-lg font-semibold pb-2">{title}</h4>

        <div className="flex items-center justify-center w-[17px] h-[17px]">
          {loading ? (
            <Spinner size="sm" />
          ) : (
            <Image
              src={trashIcon}
              alt="trash"
              width={17}
              height={17}
              className="cursor-pointer"
              onClick={onDelete}
            />
          )}
        </div>
      </div>

      <p className="text-sm">
        <span className="text-gray-500">Дата:</span> {parseDate(date, true)}
      </p>
      <p className="text-sm">
        <span className="text-gray-500">Напомнить:</span>{' '}
        {parseDate(remindDate, true)}
      </p>
      <p className="text-sm">
        <span className="text-gray-500">Должность:</span> {position}
      </p>
    </div>
  );
};

export default InterviewCard;
