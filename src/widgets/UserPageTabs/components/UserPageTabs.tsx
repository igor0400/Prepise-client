import { FC } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import UserItemsFrame from '../../../entities/UserItemsFrame';
import Scrollbars from 'react-custom-scrollbars-2';
import Posts from '../../Posts';
import { useGetUserItems } from '../../../entities/User';

interface Props {
  className?: string;
  authorId: number;
}

const UserPageTabs: FC<Props> = ({ className, authorId }) => {
  const {
    items: questions,
    loading: questionsLoading,
    moreLoading: questionsMoreLoading,
    moreDisabled: questionsMoreDisabled,
    getMoreItems: questionsGetMoreItems,
  } = useGetUserItems('questions', authorId);
  const {
    items: tests,
    loading: testsLoading,
    moreLoading: testsMoreLoading,
    moreDisabled: testsMoreDisabled,
    getMoreItems: testsGetMoreItems,
  } = useGetUserItems('tests', authorId);
  const {
    items: blocks,
    loading: blocksLoading,
    moreLoading: blocksMoreLoading,
    moreDisabled: blocksMoreDisabled,
    getMoreItems: blocksGetMoreItems,
  } = useGetUserItems('blocks', authorId);
  const {
    items: testBlocks,
    loading: testBlocksLoading,
    moreLoading: testBlocksMoreLoading,
    moreDisabled: testBlocksMoreDisabled,
    getMoreItems: testBlocksGetMoreItems,
  } = useGetUserItems('testBlocks', authorId);
  const {
    items: posts,
    loading: postsLoading,
    moreLoading: postsMoreLoading,
    moreDisabled: postsMoreDisabled,
    getMoreItems: postsGetMoreItems,
  } = useGetUserItems('posts', authorId);

  return (
    <Tabs className={className}>
      <Scrollbars autoHide autoHeight>
        <TabList className="min-w-max w-full mb-4 mt-1 px-1">
          <Tab>Посты</Tab>
          <Tab>Вопросы</Tab>
          <Tab>Блоки вопросов</Tab>
          <Tab>Тесты</Tab>
          <Tab>Блоки тестов</Tab>
        </TabList>
      </Scrollbars>

      <TabPanels>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <Posts
            items={posts}
            itemsLoading={postsLoading}
            more={{
              loading: postsMoreLoading,
              disabled: postsMoreDisabled,
              getItems: postsGetMoreItems,
            }}
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <UserItemsFrame
            items={questions}
            itemsLoading={questionsLoading}
            favouriteSettings={{
              storeName: 'favouriteQuestions',
              dataUrl: 'favourites/questions/:id',
            }}
            itemCardLink="questions"
            more={{
              loading: questionsMoreLoading,
              disabled: questionsMoreDisabled,
              getItems: questionsGetMoreItems,
            }}
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <UserItemsFrame
            items={blocks}
            itemsLoading={blocksLoading}
            favouriteSettings={{
              storeName: 'favouriteBlocks',
              dataUrl: 'favourites/blocks/:id',
            }}
            itemCardLink="questions-blocks"
            more={{
              loading: blocksMoreLoading,
              disabled: blocksMoreDisabled,
              getItems: blocksGetMoreItems,
            }}
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <UserItemsFrame
            items={tests}
            itemsLoading={testsLoading}
            favouriteSettings={{
              storeName: 'favouriteTestQuestions',
              dataUrl: 'favourites/test-questions/:id',
            }}
            itemCardLink="tests"
            more={{
              loading: testsMoreLoading,
              disabled: testsMoreDisabled,
              getItems: testsGetMoreItems,
            }}
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <UserItemsFrame
            items={testBlocks}
            itemsLoading={testBlocksLoading}
            favouriteSettings={{
              storeName: 'favouriteTestBlocks',
              dataUrl: 'favourites/test-blocks/:id',
            }}
            itemCardLink="tests-blocks"
            more={{
              loading: testBlocksMoreLoading,
              disabled: testBlocksMoreDisabled,
              getItems: testBlocksGetMoreItems,
            }}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default UserPageTabs;
