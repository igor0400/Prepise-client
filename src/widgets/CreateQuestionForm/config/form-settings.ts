import { InputData } from '../model/types';

export const inputs: InputData[] = [
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
    id: 'title',
    label: 'Напишите название вопроса',
    placeholder: 'Название вопроса...',
    type: 'default',
  },
  {
    id: 'description',
    label: 'Дайте развернутый ответ на вопрос',
    placeholder: 'Ответ на вопрос...',
    type: 'textarea',
  },
];
