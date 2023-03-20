export type ActionTypes = 'addFilterItem' | 'deleteFilterItem';

export interface Store {
  tags: string[];
  companies: string[];
  positions: string[];
}

export interface Action {
  type: ActionTypes;
  payload: {
    name: keyof Store;
    item: string;
  };
}
