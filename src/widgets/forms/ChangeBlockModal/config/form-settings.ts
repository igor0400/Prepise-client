import { CreInputData, CreOptionData } from '../../../ChangeItemPageModal';

export const inputs: CreInputData[] = [
  {
    id: 'title',
    label: 'Название блока',
    placeholder: 'Название...',
    type: 'default',
  },
  {
    id: 'description',
    label: 'Описание блока',
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
    id: 'content',
    label: 'Обобщенная информация',
    placeholder: 'Информация...',
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
