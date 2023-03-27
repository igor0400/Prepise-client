import Head from 'next/head';
import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Fade } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  nopadding?: boolean;
}

const PageWrapper: FC<Props> = ({
  children,
  title,
  description,
  nopadding,
}) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="keywords"
          content={
            description
              ? description.split(' ').join(', ')
              : 'Собеседование, подготовка к собеседованиям, подготовка, собоседование, Prepise, препайс, работа, резюме, собеседования'
          }
        />
        <meta property="og:locate" content="ru_RU" />
        <meta property="og:title" content="Prepise" />
        <meta
          name="description"
          content={description ?? 'Удобная подготовка к собеседованиям'}
        />
        <meta
          property="og:description"
          content={description ?? 'Удобная подготовка к собеседованиям'}
        />
        <meta property="og:image" content="/logo512x512.png" />
        <meta property="og:url" content="https://prepise.com" />
        <meta property="og:site_name" content="Prepise" />
        <link
          crossOrigin="use-credentials"
          rel="manifest"
          href="/manifest.json"
        />
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
