import { FC, useMemo } from 'react';
import { NavItem } from '../../../../shared';
import { navItems } from '../configs/nav-items';
//@ts-ignore
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';

const MainNavBar: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nav = searchParams.get('nav');
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');

  const isNavValid = useMemo(() => {
    for (let item of navItems) {
      if (item.search === nav) return true;
    }

    return false;
  }, [nav]);

  return (
    <ul
      className={classNames('border-r-2', {
        'pt-10': !isSmallerThan1279,
        'pt-8': isSmallerThan1279,
      })}
      style={{
        minWidth: isSmallerThan1279 ? '50px' : '252px',
        minHeight: '100vh',
        borderColor: '#edeff2',
      }}
    >
      {navItems.map((item, i) => (
        <NavItem
          {...item}
          key={i}
          isActive={
            item.search === nav || (!isNavValid && item.search === 'questions')
          }
          onClick={() => router.push({ query: { nav: item.search } })}
          size={isSmallerThan1279 ? 'small' : 'big'}
        />
      ))}
    </ul>
  );
};

export default MainNavBar;
