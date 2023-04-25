import { FC, ReactNode } from 'react';
import { CenteredLoader, NotFound, PageWrapper } from '../../../shared';

interface Props {
  loading: boolean;
  data: any | null;
  loadingTitle: string;
  notFoundTitle: string;
  notFoundText: string;
  children: ReactNode;
}

const PageLoader: FC<Props> = ({
  loading,
  data,
  loadingTitle,
  notFoundTitle,
  notFoundText,
  children,
}) => {
  if (loading) {
    return (
      <PageWrapper title={`Prepise » ${loadingTitle}`}>
        <CenteredLoader />
      </PageWrapper>
    );
  }

  if (!data) {
    return (
      <PageWrapper title={`Prepise » ${notFoundTitle}`}>
        <NotFound>{notFoundText}</NotFound>
      </PageWrapper>
    );
  }

  return <>{children}</>;
};

export default PageLoader;
