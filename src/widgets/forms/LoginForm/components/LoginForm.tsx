import { FC, useEffect, useState } from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useMediaQuery,
} from '@chakra-ui/react';
// @ts-ignore
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import UserLoginForm from '../../../../features/forms/UserLoginForm';
import CompanyLoginForm from '../../../../features/forms/CompanyLoginForm';

const LoginForm: FC = () => {
  const [formIndex, setFormIndex] = useState(0);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)');

  const search = searchParams.get('tab');
  useEffect(() => {
    if (search === '1') {
      setFormIndex(1);
    }
  }, [search]);

  const handleChangeIndex = (i: number) => {
    setFormIndex(i);
    router.push({ query: { ...router.query, tab: i } });
  };

  return (
    <div className="login-form-wrapper">
      <div className="login-form max-w-md flex flex-col m-auto p-4 sm:p-8 pb-28 rounded-lg">
        <h3 className="text-xl text-center font-bold pb-5">Вход</h3>
        <Tabs
          variant="enclosed"
          colorScheme="gray"
          index={formIndex}
          onChange={handleChangeIndex}
          size={isLargerThan400 ? 'md' : 'sm'}
        >
          <TabList>
            <Tab>Пользователь</Tab>
            <Tab>Компания</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <UserLoginForm />
            </TabPanel>
            <TabPanel>
              <CompanyLoginForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginForm;
