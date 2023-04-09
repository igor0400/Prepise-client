import React, { FC } from 'react';
import ItemPageBar from '../../../entities/ItemPageBar';
import { QuestionType } from '../../../entities/Question';
import {
  CustomTag,
  DownloadBtn,
  getFileUrl,
  ImgsGalary,
  ItemInfo,
} from '../../../shared';
import Section from './Section';
import { handleDownload } from '../../../shared';

const Question: FC<QuestionType> = (item) => {
  const {
    interviewPosition,
    defaultQuestionInfo,
    section,
    content,
    imgs,
    files,
    tags,
  } = item;

  return (
    <div className="pt-14 pb-28 max-w-5xl mx-auto">
      <ItemPageBar
        item={item}
        favouriteSettings={{
          storeName: 'favouriteQuestions',
          dataUrl: 'favourites/questions/:id',
        }}
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

      {imgs?.length > 0 && (
        <Section title="Изображения">
          <ImgsGalary
            className="flex gap-1 flex-wrap"
            imgs={imgs.map((i) => i.url)}
          />
        </Section>
      )}

      {files?.length > 0 && (
        <Section title="Файлы">
          <div className="flex flex-col gap-1">
            {files.map(({ url, name, size }, i) => (
              <DownloadBtn
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
    </div>
  );
};

export default Question;
