import { FC } from 'react';
import { tabsContent } from '../configs/tabs-content';
//@ts-ignore
import { useSearchParams } from 'next/navigation';
import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';

const MainContent: FC = () => {
  const searchParams = useSearchParams();
  const nav = searchParams.get('nav');
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');
  const [isSmallerThan330] = useMediaQuery('(max-width: 330px)');
  const Content = tabsContent[nav] ?? tabsContent.questions;

  return (
    <div
      className={classNames('flex w-full flex-col', {
        'py-8': isSmallerThan1279,
        'px-10 pt-10 pb-28': !isSmallerThan1279 && !isSmallerThan330,
        'px-3': isSmallerThan1279 && !isSmallerThan330,
        'px-2': isSmallerThan330,
      })}
    >
      <Content />
    </div>
  );
};

export default MainContent;
