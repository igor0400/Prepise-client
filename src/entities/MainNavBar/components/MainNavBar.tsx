import { FC } from 'react';
import { NavItem } from '../../../shared';
import { navItems } from '../configs/nav-items';
//@ts-ignore
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

const MainNavBar: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nav = searchParams.get('nav');

  return (
    <ul className="border-r-2 pt-10" style={{ maxWidth: '252px', minHeight: '100vh' }}>
      {navItems.map((item, i) => (
        <NavItem
          {...item}
          key={i}
          isActive={
            item.search === nav || (!nav && item.search === 'questions')
          }
          onClick={() => router.push({ query: { nav: item.search } })}
        />
      ))}
    </ul>
  );
};

export default MainNavBar;
