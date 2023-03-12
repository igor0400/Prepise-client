export interface Props {
  id: string;
  label: string;
  placeholder: string;
  isInvalid: boolean;
  error: string | null;
  register: Function;
  setValue: Function;
  optionsUrl: string;
  addItem: (func: Function) => any;
}
