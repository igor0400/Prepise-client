import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from '../types/store';
import { ReplyType } from '../../../Reply';

const profileAdapter = createEntityAdapter();

const initialState: ProfileState = {
  navbar: {
    activeTab: 'notify',
  },
  questions: { items: null, allItems: null, offset: 0, moreDisabled: false },
  blocks: {
    items: null,
    allItems: null,
    offset: 0,
    moreDisabled: false,
  },
  tests: { items: null, allItems: null, offset: 0, moreDisabled: false },
  testBlocks: { items: null, allItems: null, offset: 0, moreDisabled: false },
  posts: { items: null, allItems: null, offset: 0, moreDisabled: false },
  followingUsers: {
    items: null,
    allItems: null,
    offset: 0,
    moreDisabled: false,
  },
  tabs: {
    testId: undefined,
    replyId: undefined,
  },
};

interface ItemsDataPayload {
  data: any[];
  allData?: any[];
  name: keyof Omit<ProfileState, 'navbar' | 'tabs'>;
  offset?: number;
  moreDisabled?: boolean;
}

interface TabsPayload {
  testId?: number;
  replyId?: number;
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.navbar.activeTab = action.payload;
    },
    setItemData: (state, action: PayloadAction<ItemsDataPayload>) => {
      const { name, data, allData, offset, moreDisabled } = action.payload;
      state[name].items = data;
      state[name].allItems = allData ? allData : data;
      if (offset) state[name].offset = offset;
      if (moreDisabled) state[name].moreDisabled = moreDisabled;
    },
    updateItemData: (state, action: PayloadAction<ItemsDataPayload>) => {
      const { name, data, allData, offset, moreDisabled } = action.payload;
      state[name].items = [...(state[name].items ?? []), ...data];
      state[name].allItems = [
        ...(state[name].allItems ?? []),
        ...(allData ?? data),
      ];
      if (offset) state[name].offset = offset;
      if (moreDisabled) state[name].moreDisabled = moreDisabled;
    },
    changeTabs: (state, action: PayloadAction<TabsPayload>) => {
      const { testId, replyId } = action.payload;
      state.tabs.testId = testId;
      state.tabs.replyId = replyId;
    },
    deleteTestReply: (
      state,
      action: PayloadAction<{ testId?: number; replyId?: number }>,
    ) => {
      const { testId, replyId } = action.payload;

      if (state.tests.items && testId && replyId) {
        state.tests.items = state.tests.items.map((item) => {
          if (item.id === testId) {
            return {
              ...item,
              testQuestionInfo: {
                ...item.testQuestionInfo,
                replies: item?.testQuestionInfo.replies.filter(
                  (reply: ReplyType) => reply.id !== replyId,
                ),
              },
            };
          } else {
            return item;
          }
        });
      }
    },
    acceptTestReply: (
      state,
      action: PayloadAction<{ testId?: number; replyId?: number }>,
    ) => {
      const { testId, replyId } = action.payload;

      if (state.tests.items && testId && replyId) {
        state.tests.items = state.tests.items.map((item) => {
          if (item.id === testId) {
            return {
              ...item,
              testQuestionInfo: {
                ...item.testQuestionInfo,
                replies: item?.testQuestionInfo.replies.map(
                  (reply: ReplyType) => {
                    if (reply.id === replyId) {
                      return { ...reply, accepted: true };
                    } else {
                      return reply;
                    }
                  },
                ),
              },
            };
          } else {
            return item;
          }
        });
      }
    },
    resetData: (state) => {
      state = JSON.parse(JSON.stringify(initialState));
    },
  },
});

export const {
  setActiveTab,
  setItemData,
  updateItemData,
  changeTabs,
  deleteTestReply,
  acceptTestReply,
  resetData,
} = profileSlice.actions;

export const { selectAll } = profileAdapter.getSelectors(
  (state: any) => state.profile,
);

export default profileSlice.reducer;
