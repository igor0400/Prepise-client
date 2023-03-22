import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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

const filtersAdapter = createEntityAdapter();

const stateItem: StateItem = {
  tags: [],
  companies: [],
  positions: [],
  sections: [],
};

const initialState: FiltersState = {
  questions: stateItem,
  blockQuestions: stateItem,
  tests: stateItem,
  blockTests: stateItem,
};

interface Payload {
  itemName: keyof FiltersState;
  itemEntity: keyof StateItem;
  item: FilterItem;
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilterItem: (state, action: PayloadAction<Payload>) => {
      const { itemName, itemEntity, item } = action.payload;

      if (!state[itemName][itemEntity].map((i) => i.id).includes(item.id)) {
        state[itemName][itemEntity].push(item);
      }
    },
    deleteFilterItem: (state, action: PayloadAction<Payload>) => {
      const { itemName, itemEntity, item } = action.payload;

      state[itemName][itemEntity] = state[itemName][itemEntity].filter(
        (i) => i.id !== item.id,
      );
    },
  },
});

export const { addFilterItem, deleteFilterItem } = filtersSlice.actions;

export const { selectAll } = filtersAdapter.getSelectors(
  (state: any) => state.filters,
);

export default filtersSlice.reducer;
