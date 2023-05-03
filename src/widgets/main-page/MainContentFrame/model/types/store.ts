export interface FilterItem {
  id: number;
  title?: string;
  name?: string;
}

export interface StateItem {
  tags: FilterItem[];
  companies: FilterItem[];
  positions: FilterItem[];
  sections: FilterItem[];
}

export interface FiltersState {
  questions: StateItem;
  blockQuestions: StateItem;
  tests: StateItem;
  blockTests: StateItem;
  tags: string;
  users: string;
  companies: string;
}

export type SlicedPayloadItems = Omit<
  FiltersState,
  'tags' | 'users' | 'companies'
>;
export type SimplePayloadItems = Omit<
  FiltersState,
  'questions' | 'blockQuestions' | 'tests' | 'blockTests'
>;

export interface SlicedPayload {
  itemName: keyof SlicedPayloadItems;
  itemEntity: keyof StateItem;
  item: FilterItem;
}

export interface SimplePayload {
  itemName: keyof SimplePayloadItems;
  value: string;
}
