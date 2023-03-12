import CreationFormFrame from './components/CreationFormFrame';
import { InputData, OptionData } from './model/types';
import creation from './model/store/creationSlice';
import {
  addBlockQuestion,
  deleteBlockQuestion,
  addBlockTest,
  deleteBlockTest,
  resetBlockQuestions,
  resetBlockTests,
  setBlockQuestions,
  setBlockTests,
} from './model/store/creationSlice';
import {
  addBlockEntityWithLS,
  deleteBlockEntityWithLS,
  resetBlockEntitiesWithLS,
  setBlockEntitiesWithLS,
} from './lib/assets/customDispatches';

export {
  creation,
  addBlockQuestion,
  deleteBlockQuestion,
  addBlockTest,
  deleteBlockTest,
  resetBlockQuestions,
  resetBlockTests,
  setBlockQuestions,
  setBlockTests,
  addBlockEntityWithLS,
  deleteBlockEntityWithLS,
  resetBlockEntitiesWithLS,
  setBlockEntitiesWithLS,
};
export type { InputData as CreInputData, OptionData as CreOptionData };
export default CreationFormFrame;
