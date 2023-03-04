export interface Settings {
  title: string;
  descr: string;
  list: string[];
}

export interface NewList {
  texts: string[];
  links: { link: string; text: string }[] | null;
}

export interface ChangedSettings {
  title: string;
  descr: string;
  list: NewList[];
}
