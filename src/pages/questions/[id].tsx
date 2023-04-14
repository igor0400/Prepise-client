import { Spinner } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { QuestionType } from '../../entities/Question';
import {
  api,
  CenteredLoader,
  FillPageLoader,
  PageWrapper,
  useRequest,
} from '../../shared';
import { NotFound } from '../../shared';
import Question from '../../widgets/Question';

interface Props {
  data: QuestionType | undefined;
}

const QuestionPage: NextPage<Props> = () => {
  const { request } = useRequest(false);
  const [data, setData] = useState<QuestionType | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getData();
  }, [router]);

  async function getData() {
    const id = router?.query?.id;
    if (!id) return;

    setLoading(true);

    const value = await request(async () => {
      const args = await api.get(`questions/default/${id}`).json();
      return args;
    }, true);

    if (value) setData(value);

    setLoading(false);
  }

  if (loading) {
    return (
      <PageWrapper title="Prepise » Ищем вопрос...">
        <CenteredLoader />
      </PageWrapper>
    );
  }

  if (!data) {
    return (
      <PageWrapper title="Prepise » Вопрос не найден">
        <NotFound>Вопрос не найден</NotFound>
      </PageWrapper>
    );
  }

  const { title } = data;

  return (
    <PageWrapper title={`Prepise » ${title}`} description={title}>
      <Question {...data} />
    </PageWrapper>
  );
};

export default QuestionPage;
