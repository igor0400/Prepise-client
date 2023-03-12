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
} from './model/store/creationSlice';

export {
  creation,
  addBlockQuestion,
  deleteBlockQuestion,
  addBlockTest,
  deleteBlockTest,
  resetBlockQuestions,
  resetBlockTests,
};
export type { InputData as CreInputData, OptionData as CreOptionData };
export default CreationFormFrame;
