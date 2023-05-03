import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  FiltersState,
  SimplePayload,
  SlicedPayload,
  StateItem,
} from '../types/store';

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
  tags: '',
  users: '',
  companies: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilterItem: (state, action: PayloadAction<SlicedPayload>) => {
      const { itemName, itemEntity, item } = action.payload;

      if (!state[itemName][itemEntity].map((i) => i.id).includes(item.id)) {
        state[itemName][itemEntity].push(item);
      }
    },
    deleteFilterItem: (state, action: PayloadAction<SlicedPayload>) => {
      const { itemName, itemEntity, item } = action.payload;

      state[itemName][itemEntity] = state[itemName][itemEntity].filter(
        (i) => i.id !== item.id,
      );
    },
    addSimpleFilterItem: (state, action: PayloadAction<SimplePayload>) => {
      const { itemName, value } = action.payload;

      state[itemName] = value;
    },
  },
});

export const { addFilterItem, deleteFilterItem, addSimpleFilterItem } =
  filtersSlice.actions;

export const { selectAll } = filtersAdapter.getSelectors(
  (state: any) => state.filters,
);

export default filtersSlice.reducer;
