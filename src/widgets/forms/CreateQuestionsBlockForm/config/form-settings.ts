import {
  CreInputData,
  CreOptionData,
} from '../../../../entities/forms/CreationFormFrame';

export const inputs: CreInputData[] = [
  {
    id: 'questions',
    label: 'Добавить вопрос',
    type: 'question',
  },
  {
    id: 'title',
    label: 'Напишите название блока',
    placeholder: 'Название...',
    type: 'default',
  },
  {
    id: 'description',
    label: 'Напишите описание блока',
    placeholder: 'Описание...',
    type: 'default',
  },
  {
    id: 'section',
    label: 'Выберете раздел к которому относится блок',
    placeholder: 'Раздел...',
    type: 'auto-complete',
    optionsUrl: 'data/sections',
  },
  {
    id: 'content',
    label: 'Напишите обобщенную информацию о вопросах',
    placeholder: 'Информация...',
    type: 'textarea',
  },
  {
    id: 'tags',
    label: 'Добавьте теги, чтобы описать, о чем ваш блок',
    placeholder: 'Тег...',
    type: 'multy-select',
    optionsUrl: 'tags?limit=50',
  },
];

export const options: CreOptionData[] = [
  {
    id: 'commented',
    label: 'Комментарии',
    type: 'switch',
  },
];
