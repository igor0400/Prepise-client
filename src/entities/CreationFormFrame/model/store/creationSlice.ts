import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BlockEntity {
  id: string;
  title: string;
}

interface CreationState {
  questionsBlock: {
    questions: BlockEntity[];
  };
  testsBlock: {
    tests: BlockEntity[];
  };
}

const creationAdapter = createEntityAdapter();

const initialState: CreationState = {
  questionsBlock: {
    questions: [],
  },
  testsBlock: {
    tests: [],
  },
};

export const creationSlice = createSlice({
  name: 'creation',
  initialState,
  reducers: {
    addBlockQuestion: (state, action: PayloadAction<BlockEntity>) => {
      state.questionsBlock.questions.push(action.payload);
    },
    deleteBlockQuestion: (state, action: PayloadAction<string>) => {
      const { questions } = state.questionsBlock;
      const deleteItemId = action.payload;

      state.questionsBlock.questions = questions.filter(
        (item) => item.id !== deleteItemId,
      );
    },
    resetBlockQuestions: (state) => {
      state.questionsBlock.questions = [];
    },

    addBlockTest: (state, action: PayloadAction<BlockEntity>) => {
      state.testsBlock.tests.push(action.payload);
    },
    deleteBlockTest: (state, action: PayloadAction<string>) => {
      const { tests } = state.testsBlock;
      const deleteItemId = action.payload;

      state.testsBlock.tests = tests.filter((item) => item.id !== deleteItemId);
    },
    resetBlockTests: (state) => {
      state.testsBlock.tests = [];
    },
  },
});

export const {
  addBlockQuestion,
  deleteBlockQuestion,
  addBlockTest,
  deleteBlockTest,
  resetBlockQuestions,
  resetBlockTests,
} = creationSlice.actions;

export const { selectAll } = creationAdapter.getSelectors(
  (state: any) => state.creation,
);

export default creationSlice.reducer;
