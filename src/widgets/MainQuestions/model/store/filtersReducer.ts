import { Action } from '../types/store';
import { Store } from '../types/store';

export function reducer(state: Store, action: Action) {
  switch (action.type) {
    case 'addFilterItem':
      return addFilterItem(state, action);
    case 'deleteFilterItem':
      return deleteFilterItem(state, action);
    default:
      return state;
  }
}

function addFilterItem(state: Store, action: Action) {
  const section = action.payload.name;
  const item = action.payload.item;

  if (!state[section]) return state;

  return { ...state, [section]: [...state[section], item] };
}

function deleteFilterItem(state: Store, action: Action) {
  const section = action.payload.name;
  const item = action.payload.item;

  if (!state[section]) return state;

  return { ...state, [section]: state[section].filter((i) => i !== item) };
}
