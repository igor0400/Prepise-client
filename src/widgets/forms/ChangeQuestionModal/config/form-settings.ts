import { CreInputData, CreOptionData } from '../../../ChangeItemPageModal';

export const inputs: CreInputData[] = [
  {
    id: 'title',
    label: 'Название вопроса',
    placeholder: 'Название...',
    type: 'default',
  },
  {
    id: 'description',
    label: 'Описание вопроса',
    placeholder: 'Описание...',
    type: 'default',
  },
  {
    id: 'section',
    label: 'Раздел',
    placeholder: 'Раздел...',
    type: 'auto-complete',
    optionsUrl: 'data/sections',
  },
  {
    id: 'interviewPosition',
    label: 'Должность',
    placeholder: 'Должность...',
    type: 'auto-complete',
    optionsUrl: 'data/positions',
  },
  {
    id: 'interviewCompany',
    label: 'Компания',
    placeholder: 'Компания...',
    type: 'auto-complete',
    optionsUrl: 'data/companies',
  },
  {
    id: 'content',
    label: 'Ответ на вопрос',
    placeholder: 'Ответ на вопрос...',
    type: 'textarea',
  },
  {
    id: 'tags',
    label: 'Добавьте теги',
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
