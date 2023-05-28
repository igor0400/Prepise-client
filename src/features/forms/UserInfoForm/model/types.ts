export interface InputData {
  id: string;
  label: string;
  placeholder?: string;
  type: 'default' | 'textarea' | 'multy-select';
  optionsUrl?: string;
}
