import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import interviewesIcon from 'public/images/icons/interviewes-bold.svg';
import plus from 'public/images/icons/interviewes-plus.svg';
import Image from 'next/image';
import { EmptyItems, useTypedSelector } from '../../../../shared';
import CreateInterviewModal from '../../../../features/forms/CreateInterviewModal';
import { useDisclosure } from '@chakra-ui/react';

const Interviewes: FC = () => {
  const interviewes = useTypedSelector((state) => state.user.data?.interviewes);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ProfileContentWrapper
      title="Собеседования"
      icon={interviewesIcon}
      className="h-full"
    >
      <div className="min-h-[835px]">
        {interviewes?.length ? (
          <div>
            {[...interviewes]
              .sort((a, b) => b.id - a.id)
              .map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
          </div>
        ) : (
          <EmptyItems />
        )}
      </div>
      <button
        className="sticky bottom-10 text-4xl shadow-md p-3 rounded-full float-right mr-2 mb-6"
        onClick={onOpen}
      >
        <Image src={plus} alt="plus" width={20} height={20} />
      </button>
      <CreateInterviewModal onClose={onClose} isOpen={isOpen} />
    </ProfileContentWrapper>
  );
};

export default Interviewes;
