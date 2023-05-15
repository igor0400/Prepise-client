import { FC } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import PanelFrame from './PanelFrame';
import { QuestionType } from '../../../entities/Question';
import { BlockType } from '../../../entities/Block';
import Scrollbars from 'react-custom-scrollbars-2';
import { PostType } from '../../../entities/Post';
import Posts from '../../Posts';
import { useGetUserItems } from '../../../entities/User';

interface Props {
  className?: string;
  authorId: number;
}

const UserPageTabs: FC<Props> = ({ className, authorId }) => {
  const {
    items: questions,
    moreLoading: questionsMoreLoading,
    moreDisabled: questionsMoreDisabled,
    getMoreItems: questionsGetMoreItems,
  } = useGetUserItems('questions', authorId);
  const {
    items: tests,
    moreLoading: testsMoreLoading,
    moreDisabled: testsMoreDisabled,
    getMoreItems: testsGetMoreItems,
  } = useGetUserItems('tests', authorId);
  const {
    items: blocks,
    moreLoading: blocksMoreLoading,
    moreDisabled: blocksMoreDisabled,
    getMoreItems: blocksGetMoreItems,
  } = useGetUserItems('blocks', authorId);
  const {
    items: testBlocks,
    moreLoading: testBlocksMoreLoading,
    moreDisabled: testBlocksMoreDisabled,
    getMoreItems: testBlocksGetMoreItems,
  } = useGetUserItems('testBlocks', authorId);
  const {
    items: posts,
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
            more={{
              loading: postsMoreLoading,
              disabled: postsMoreDisabled,
              getItems: postsGetMoreItems,
            }}
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <PanelFrame
            items={questions}
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
          <PanelFrame
            items={blocks}
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
          <PanelFrame
            items={tests}
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
          <PanelFrame
            items={testBlocks}
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
