import classNames from 'classnames';
import React, { FC } from 'react';

interface Props {
  reply: any;
}

const ReplyView: FC<Props> = ({ reply }) => {
  const { accepted, text } = reply;

  return (
    <div>
      <h6 className="mb-2 text-sm sm:text-base font-semibold">Ваш ответ</h6>

      <div
        className={classNames('bg-gray-200 p-2 sm:p-3 rounded-md', {
          'border border-green-500': accepted,
        })}
      >
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
        {accepted && (
          <p className="text-green-500 text-end font-semibold text-xs sm:text-sm">
            Одобрено
          </p>
        )}
      </div>
    </div>
  );
};

export default ReplyView;
