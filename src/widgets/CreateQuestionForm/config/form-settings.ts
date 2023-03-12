import {
  CreInputData,
  CreOptionData,
} from '../../../entities/forms/CreationFormFrame';

export const inputs: CreInputData[] = [
  {
    id: 'title',
    label: 'Напишите название вопроса',
    placeholder: 'Название...',
    type: 'default',
  },
  {
    id: 'description',
    label: 'Напишите описание вопроса',
    placeholder: 'Описание...',
    type: 'default',
  },
  {
    id: 'section',
    label: 'Выберете раздел к которому относится вопрос',
    placeholder: 'Раздел...',
    type: 'auto-complete',
    optionsUrl: 'data/sections',
  },
  {
    id: 'interviewPosition',
    label: 'Выберете должность на которую вы собеседовались',
    placeholder: 'Должность...',
    type: 'auto-complete',
    optionsUrl: 'data/positions',
  },
  {
    id: 'interviewCompany',
    label: 'Выберете компанию в которой вы проходили собеседование',
    placeholder: 'Компания...',
    type: 'auto-complete',
    optionsUrl: 'data/companies',
  },
  {
    id: 'content',
    label: 'Дайте развернутый ответ на вопрос',
    placeholder: 'Ответ на вопрос...',
    type: 'textarea',
  },
  {
    id: 'tags',
    label: 'Добавьте теги, чтобы описать, о чем ваш вопрос',
    placeholder: 'Тег...',
    type: 'multy-select',
    optionsUrl: 'tags?limit=50',
  },
  {
    id: 'image',
    label: 'Прикрепите изображение',
    type: 'image',
  },
  {
    id: 'file',
    label: 'Прикрепите файл',
    type: 'file',
  },
];

export const options: CreOptionData[] = [
  {
    id: 'commented',
    label: 'Комментарии',
    type: 'switch',
  },
];
