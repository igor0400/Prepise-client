export interface InputData {
  id: string;
  label: string;
  placeholder?: string;
  type:
    | 'auto-complete'
    | 'default'
    | 'textarea'
    | 'multy-select'
  optionsUrl?: string;
}
export interface OptionData {
  id: string;
  label: string;
  type: 'switch';
}
