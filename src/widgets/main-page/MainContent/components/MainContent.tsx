import { FC } from 'react';
import { tabsContent } from '../configs/tabs-content';
//@ts-ignore
import { useSearchParams } from 'next/navigation';
import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';

const MainContent: FC = () => {
  const searchParams = useSearchParams();
  const nav = searchParams.get('nav');
  const [isSmallerThan1115] = useMediaQuery('(max-width: 1115px)');
  const Content = tabsContent[nav] ?? tabsContent.questions;

  return (
    <div
      className={classNames('flex w-full flex-col', {
        'px-3 py-8': isSmallerThan1115,
        'px-10 pt-10 pb-28': !isSmallerThan1115,
      })}
    >
      <Content />
    </div>
  );
};

export default MainContent;
