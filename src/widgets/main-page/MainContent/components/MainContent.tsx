import { FC } from 'react';
import { tabsContent } from '../configs/tabs-content';
//@ts-ignore
import { useSearchParams } from 'next/navigation';

const MainContent: FC = () => {
  const searchParams = useSearchParams();
  const nav = searchParams.get('nav');
  const Content = tabsContent[nav] ?? tabsContent.questions;

  return (
    <div
      className="min-h-screen flex w-full flex-col border-l-2 px-10 pt-10 pb-28 max-[330px]:px-2 max-[1279px]:px-3 max-[1279px]:pt-8 max-[1279px]:pb-20 ml-[50px] min-[1280px]:ml-[252px]"
      style={{
        borderColor: '#edeff2',
      }}
    >
      <Content />
    </div>
  );
};

export default MainContent;
