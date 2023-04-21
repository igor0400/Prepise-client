import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BlockType } from '../../entities/Block';
import { api, CenteredLoader, PageWrapper, useRequest } from '../../shared';
import { NotFound } from '../../shared';
import Block from '../../widgets/Block';

const BlockQuestionsPage: NextPage = () => {
  const { request } = useRequest(false);
  const [data, setData] = useState<BlockType | null>(null);
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
      const args = await api.get(`blocks/default/${id}`).json();
      return args;
    }, false);

    if (value) setData(value);

    setLoading(false);
  }

  if (loading) {
    return (
      <PageWrapper title="Prepise » Ищем блок...">
        <CenteredLoader />
      </PageWrapper>
    );
  }

  if (!data) {
    return (
      <PageWrapper title="Prepise » Блок не найден">
        <NotFound>Блок вопросов не найден</NotFound>
      </PageWrapper>
    );
  }

  const { title } = data;

  return (
    <PageWrapper title={`Prepise » ${title}`} description={title}>
      <Block {...data} />
    </PageWrapper>
  );
};

export default BlockQuestionsPage;
