import Head from 'next/head';
import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Fade } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  title?: string;
  nopadding?: boolean;
}

const PageWrapper: FC<Props> = ({ children, title, nopadding }) => {
  return (
    <>
      <Head>
        <title>{title ?? 'Prepise'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fade
        in={true}
        className={classNames('content-wrapper h-full', {
          'padding-50': !nopadding,
        })}
      >
        {children}
      </Fade>
    </>
  );
};

export default PageWrapper;
