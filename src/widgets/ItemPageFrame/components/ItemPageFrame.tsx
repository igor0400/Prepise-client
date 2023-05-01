import { Divider, useMediaQuery } from '@chakra-ui/react';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { CommentType } from '../../../entities/Comment';
import ItemPageBar from '../../ItemPageBar';
import { QuestionType } from '../../../entities/Question';
import {
  CustomTag,
  DownloadFile,
  getFileUrl,
  ImgsGalary,
  ItemInfo,
  sortByDate,
  useRequest,
  useTypedSelector,
} from '../../../shared';
import CommentsList from '../../CommentsList';
import CreateCommentForm from '../../../features/forms/CreateCommentForm';
import ItemPageToolbar from '../../ItemPageToolbar';
import Section from './Section';
import { postView } from '../lib/api/postView';
import { BlockType } from '../../../entities/Block';
import { UserItems } from '../../../entities/User';
import QuestionLineCard from '../../../entities/QuestionLineCard';
import TestReply from './TestReply';

interface Props {
  item: QuestionType | BlockType;
  changeBtn: ReactNode;
  favouriteSettings: {
    storeName: UserItems;
    dataUrl: string;
  };
  url: string;
}

const ItemPageFrame: FC<Props> = ({
  item,
  changeBtn,
  favouriteSettings,
  url,
}) => {
  const {
    id,
    interviewPosition = undefined,
    defaultQuestionInfo = {},
    section,
    content,
    imgs = [],
    files = [],
    tags,
    authorId,
    usedUsersInfo,
    commented,
    type,
    testQuestionInfo = undefined,
    questions: itemQuestions = [],
    comments: initialComments,
    user,
  } = { ...item };

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [showImgs, setShowImgs] = useState(true);
  const userId = useTypedSelector((state) => state.user.data?.id);
  const [comments, setComments] = useState(
    sortByDate<CommentType>(initialComments, 'newest'),
  );
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');
  const { request } = useRequest(true);

  const createComment = (comment: any) => {
    setComments((state) => [comment, ...state]);
  };

  useEffect(() => {
    if (userId) {
      postData();
    }
    if (itemQuestions.length > 0) setQuestions(itemQuestions);
  }, []);

  async function postData() {
    for (let info of usedUsersInfo) {
      if (info?.userId === userId) return;
    }

    await request(postView, false, `${url}/view/${id}`);
  }

  const deleteQuestion = (questionId: number) => {
    setQuestions((state) => state.filter(({ id }) => id !== questionId));
  };

  const imgsGalarySize = isLargerThan768 ? 150 : isLargerThan640 ? 100 : 80;

  return (
    <div className="pt-8 sm:pt-14 pb-20 sm:pb-28 max-w-5xl mx-auto">
      <ItemPageBar
        item={item}
        favouriteSettings={favouriteSettings}
        reactionsUrl={url}
        className="mb-4"
      />
      <ItemInfo
        section={section}
        position={interviewPosition}
        company={defaultQuestionInfo?.interviewCompany}
        questions={authorId === userId ? undefined : questions}
      />

      {content && (
        <div
          className="mt-4 bg-slate-200 p-2 sm:p-3 rounded"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}

      {questions?.length > 0 && (
        <Section
          title={type === 'default' ? 'Вопросы' : 'Тесты'}
          className="flex flex-col gap-2"
        >
          {questions.map((item) => (
            <QuestionLineCard
              key={item.id}
              {...item}
              deleteItem={deleteQuestion}
            />
          ))}
        </Section>
      )}

      {imgs?.length > 0 && showImgs && (
        <Section title="Изображения">
          <ImgsGalary
            className="flex gap-1 flex-wrap"
            imgs={imgs.map((i) => i.url)}
            setShow={setShowImgs}
            imgHeight={imgsGalarySize}
            imgWidth={imgsGalarySize}
          />
        </Section>
      )}

      {files?.length > 0 && (
        <Section title="Файлы">
          <div className="flex flex-col gap-1">
            {files.map(({ url, ...args }, i) => (
              <DownloadFile key={i} url={getFileUrl(url)} {...args} />
            ))}
          </div>
        </Section>
      )}

      {tags?.length > 0 && (
        <Section title="Теги">
          <div className="flex flex-wrap gap-1">
            {tags.map(({ name }, i) => (
              <CustomTag key={i} label={name} />
            ))}
          </div>
        </Section>
      )}

      <ItemPageToolbar
        className="mt-12"
        authorId={authorId}
        authorType={user?.type}
        withUser={userId !== authorId}
        changeBtn={changeBtn}
      />

      {testQuestionInfo && authorId !== userId && (
        <>
          <Divider className="my-6" style={{ borderBottomWidth: 2 }} />
          <TestReply replies={testQuestionInfo?.replies} questionId={id} />
        </>
      )}

      {commented && (
        <>
          <Divider className="mt-8 mb-6" style={{ borderBottomWidth: 2 }} />

          <CreateCommentForm
            title="Комментировать"
            placeholder="Комментарий..."
            url={`${url}/comment/${id}`}
            createComment={createComment}
          />

          {comments.length > 0 && (
            <CommentsList url={url} comments={comments} className="mt-6" />
          )}
        </>
      )}
    </div>
  );
};

export default ItemPageFrame;
