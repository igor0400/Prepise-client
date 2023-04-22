import { FC } from 'react';
import { tabsContent } from '../configs/tabs-content';
//@ts-ignore
import { useSearchParams } from 'next/navigation';

const MainContent: FC = () => {
  const searchParams = useSearchParams();
  const nav = searchParams.get('nav');
  const Content = tabsContent[nav] ?? tabsContent.questions;

  // сделать скроллы

  return (
    <div className="flex w-full flex-col px-10 pt-10 pb-28 max-[330px]:px-2 max-[1279px]:px-3 max-[1279px]:pt-8 max-[1279px]:pb-20">
      <Content />
    </div>
  );
};

export default MainContent;
