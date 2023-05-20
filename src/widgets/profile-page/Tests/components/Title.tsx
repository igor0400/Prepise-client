import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface Props {
  main: {
    title: string;
  };
  test?: {
    title: string;
    id: number;
  };
  reply?: {
    title: string;
    id: number;
  };
}

const Title: FC<Props> = ({ main, test, reply }) => {
  const router = useRouter();
  const query = router.query;

  const handleMainClick = () => {
    const newQuery = router.query;
    delete newQuery.testId;
    delete newQuery.replyId;

    router.push({ query: newQuery });
  };

  const handleSecondClick = () => {
    const newQuery = router.query;
    delete newQuery.replyId;

    router.push({ query: { ...newQuery, testId: test?.id } });
  };

  const handleThirdClick = () => {
    router.push({ query: { ...router.query, replyId: reply?.id } });
  };

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <button
          onClick={() => handleMainClick()}
          disabled={!query.testId && !query.replyId}
        >
          <h2 className="text-2xl font-bold">{main.title}</h2>
        </button>
      </BreadcrumbItem>

      {test && (
        <BreadcrumbItem>
          <button
            onClick={() => handleSecondClick()}
            disabled={Boolean(query.testId) && !query.replyId}
          >
            {test.title}
          </button>
        </BreadcrumbItem>
      )}

      {reply && (
        <BreadcrumbItem>
          <button
            onClick={() => handleThirdClick()}
            disabled={Boolean(query.replyId)}
          >
            {reply.title}
          </button>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};

export default Title;
