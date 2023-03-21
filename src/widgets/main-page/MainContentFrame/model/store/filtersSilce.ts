import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface StateItem {
  tags: string[];
  companies: string[];
  positions: string[];
  sections: string[];
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
  item: string;
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilterItem: (state, action: PayloadAction<Payload>) => {
      const { itemName, itemEntity, item } = action.payload;

      if (!state[itemName][itemEntity].includes(item)) {
        state[itemName][itemEntity].push(item);
      }
    },
    deleteFilterItem: (state, action: PayloadAction<Payload>) => {
      const { itemName, itemEntity, item } = action.payload;

      state[itemName][itemEntity] = state[itemName][itemEntity].filter(
        (i) => i !== item,
      );
    },
  },
});

export const { addFilterItem, deleteFilterItem } = filtersSlice.actions;

export const { selectAll } = filtersAdapter.getSelectors(
  (state: any) => state.filters,
);

export default filtersSlice.reducer;
