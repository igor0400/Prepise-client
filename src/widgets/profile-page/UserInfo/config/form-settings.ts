export const inputs: any[] = [
  {
    id: 'name',
    label: 'Имя:',
    placeholder: 'Алексей Вильнусов',
    type: 'default',
  },
  {
    id: 'email',
    label: 'Электронная почта:',
    placeholder: 'alexey.vilnusov@gmail.com',
    type: 'default',
  },
  {
    id: 'location',
    label: 'Местоположение:',
    placeholder: 'Местоположение...',
    type: 'default',
  },
  {
    id: 'description',
    label: 'Описание:',
    placeholder: 'Описание...',
    type: 'textarea',
  },
  {
    id: 'tags',
    label: 'Теги, описывающие ваши навыки:',
    placeholder: 'Тег...',
    type: 'multy-select',
    optionsUrl: 'tags?limit=50',
  },
  {
    id: 'verifyCode',
    label: 'Код подтверждения:',
    placeholder: 'IFJr9rt0rK',
    type: 'email-verify',
  },
];
