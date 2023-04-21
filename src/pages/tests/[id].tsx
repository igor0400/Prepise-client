import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { QuestionType } from '../../entities/Question';
import { api, CenteredLoader, PageWrapper, useRequest } from '../../shared';
import { NotFound } from '../../shared';
import Question from '../../widgets/Question';

const TestPage: NextPage = () => {
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
      const args = await api.get(`questions/test/${id}`).json();
      return args;
    }, false);

    if (value) setData(value);

    setLoading(false);
  }

  if (loading) {
    return (
      <PageWrapper title="Prepise » Ищем тест...">
        <CenteredLoader />
      </PageWrapper>
    );
  }

  if (!data) {
    return (
      <PageWrapper title="Prepise » Тест не найден">
        <NotFound>Тест не найден</NotFound>
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

export default TestPage;
