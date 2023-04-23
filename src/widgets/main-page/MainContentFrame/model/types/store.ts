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
}

export interface Payload {
  itemName: keyof FiltersState;
  itemEntity: keyof StateItem;
  item: FilterItem;
}
