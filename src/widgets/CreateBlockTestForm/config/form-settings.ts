import {
  CreInputData,
  CreOptionData,
} from '../../../entities/forms/CreationFormFrame';

export const inputs: CreInputData[] = [
  {
    id: 'title',
    label: 'Напишите название теста',
    placeholder: 'Название...',
    type: 'default',
  },
  {
    id: 'description',
    label: 'Напишите описание теста',
    placeholder: 'Описание...',
    type: 'default',
  },
  {
    id: 'section',
    label: 'Выберете раздел к которому относится тест',
    placeholder: 'Раздел...',
    type: 'auto-complete',
    optionsUrl: 'data/sections',
  },
  {
    id: 'interviewPosition',
    label: 'Выберете должность на которую собеседуете',
    placeholder: 'Должность...',
    type: 'auto-complete',
    optionsUrl: 'data/positions',
  },
  {
    id: 'content',
    label: 'Напишите подробное задание',
    placeholder: 'Задание...',
    type: 'textarea',
  },
  {
    id: 'tags',
    label: 'Добавьте теги, чтобы описать, о чем ваш тест',
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
