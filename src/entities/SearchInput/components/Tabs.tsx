import { FC } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Scrollbars from 'react-custom-scrollbars-2';
import Items from './Items';

interface Props {
  className?: string;
  onClose(): void;
}

const SearchTabs: FC<Props> = ({ className, onClose }) => {
  return (
    <Tabs className={className}>
      <Scrollbars autoHide autoHeight>
        <TabList className="min-w-max w-full mb-4 mt-1 px-1">
          <Tab>Вопросы</Tab>
          <Tab>Блоки вопросов</Tab>
          <Tab>Тесты</Tab>
          <Tab>Блоки тестов</Tab>
        </TabList>
      </Scrollbars>

      <TabPanels>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <Items
            onClose={onClose}
            name="questions"
            getUrl="questions/default"
            redirectUrl="questions"
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <Items
            onClose={onClose}
            name="blocksQuestions"
            getUrl="blocks/default"
            redirectUrl="questions-blocks"
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <Items
            onClose={onClose}
            name="tests"
            getUrl="questions/test"
            redirectUrl="tests"
          />
        </TabPanel>
        <TabPanel style={{ padding: '10px 0 16px' }}>
          <Items
            onClose={onClose}
            name="blocksTests"
            getUrl="blocks/test"
            redirectUrl="tests-blocks"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SearchTabs;
