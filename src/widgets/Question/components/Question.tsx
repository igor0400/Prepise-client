import { Divider } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
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
  useTypedSelector,
} from '../../../shared';
import CemmentsList from '../../CemmentsList';
import CreateCommentForm from '../../forms/CreateCommentForm';
import ItemPageToolbar from '../../ItemPageToolbar';
import Section from './Section';

const Question: FC<QuestionType> = (item) => {
  const {
    id,
    interviewPosition,
    defaultQuestionInfo,
    section,
    content,
    imgs,
    files,
    tags,
    authorId,
    comments: initialComments,
  } = item;
  const [showImgs, setShowImgs] = useState(true);
  const userId = useTypedSelector((state) => state.user.data?.id);
  const [comments, setComments] = useState(
    sortByDate<CommentType>(initialComments, 'newest'),
  );

  const createComment = (comment: any) => {
    setComments((state) => [comment, ...state]);
  };

  return (
    <div className="pt-14 pb-28 max-w-5xl mx-auto">
      <ItemPageBar
        item={item}
        favouriteSettings={{
          storeName: 'favouriteQuestions',
          dataUrl: 'favourites/questions/:id',
        }}
        reactionsUrl="questions"
        className="mb-4"
      />
      <ItemInfo
        section={section}
        position={interviewPosition}
        company={defaultQuestionInfo?.interviewCompany}
      />

      {content && (
        <div
          className="mt-4 bg-slate-200 p-2 rounded"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}

      {imgs?.length > 0 && showImgs && (
        <Section title="Изображения">
          <ImgsGalary
            className="flex gap-1 flex-wrap"
            imgs={imgs.map((i) => i.url)}
            setShow={setShowImgs}
          />
        </Section>
      )}

      {files?.length > 0 && (
        <Section title="Файлы">
          <div className="flex flex-col gap-1">
            {files.map(({ url, name, size }, i) => (
              <DownloadFile
                key={i}
                url={getFileUrl(url)}
                name={name}
                size={size}
              />
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
        withUser={userId !== authorId}
      />

      <Divider className="border-b-2 mt-8 mb-6" />

      <CreateCommentForm
        title="Комментировать"
        placeholder="Комментарий..."
        url={`questions/comment/${id}`}
        createComment={createComment}
      />

      {comments.length > 0 && (
        <CemmentsList comments={comments} className="mt-6" />
      )}
    </div>
  );
};

export default Question;
