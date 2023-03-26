import { FC } from 'react';
import { tabsContent } from '../configs/tabs-content';
//@ts-ignore
import { useSearchParams } from 'next/navigation';
import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';

const MainContent: FC = () => {
  const searchParams = useSearchParams();
  const nav = searchParams.get('nav');
  const [isSmallerThan980] = useMediaQuery('(max-width: 980px)');
  const Content = tabsContent[nav] ?? tabsContent.questions;

  return (
    <div
      className={classNames('flex w-full flex-col', {
        'px-3 py-8': isSmallerThan980,
        'px-10 pt-10 pb-28': !isSmallerThan980,
      })}
    >
      <Content />
    </div>
  );
};

export default MainContent;
