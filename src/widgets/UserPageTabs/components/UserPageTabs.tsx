import { FC } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import PanelFrame from './PanelFrame';
import { QuestionType } from '../../../entities/Question';
import { BlockType } from '../../../entities/Block';
import Scrollbars from 'react-custom-scrollbars-2';

interface Props {
  className?: string;
  questions: QuestionType[];
  tests: QuestionType[];
  blocksQuestions: BlockType[];
  blocksTests: BlockType[];
}

const UserPageTabs: FC<Props> = ({
  className,
  questions,
  blocksQuestions,
  tests,
  blocksTests,
}) => {
  return (
    <Tabs className={className}>
      <Scrollbars autoHide autoHeight>
        <TabList className="min-w-max w-full mb-4 mt-1">
          <Tab>Посты</Tab>
          <Tab>Вопросы</Tab>
          <Tab>Блоки вопросов</Tab>
          <Tab>Тесты</Tab>
          <Tab>Блоки тестов</Tab>
        </TabList>
      </Scrollbars>

      <TabPanels>
        <TabPanel>Посты</TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <PanelFrame
            items={questions}
            favouriteSettings={{
              storeName: 'favouriteQuestions',
              dataUrl: 'favourites/questions/:id',
            }}
            itemCardLink="questions"
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <PanelFrame
            items={blocksQuestions}
            favouriteSettings={{
              storeName: 'favouriteBlocks',
              dataUrl: 'favourites/blocks/:id',
            }}
            itemCardLink="questions-blocks"
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
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <PanelFrame
            items={blocksTests}
            favouriteSettings={{
              storeName: 'favouriteTestBlocks',
              dataUrl: 'favourites/test-blocks/:id',
            }}
            itemCardLink="tests-blocks"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default UserPageTabs;
