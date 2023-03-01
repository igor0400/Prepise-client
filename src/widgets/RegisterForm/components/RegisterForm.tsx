import { FC, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
// @ts-ignore
import { useSearchParams, useRouter } from 'next/navigation';
import CompanyRegisterForm from '../../../features/CompanyRegisterForm';
import UserRegisterForm from '../../../features/UserRegisterForm';

const RegisterForm: FC = () => {
  const [formIndex, setFormIndex] = useState(0);
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get('tab');
  useEffect(() => {
    if (search === '1') {
      setFormIndex(1);
    }
  }, [search]);

  const handleChangeIndex = (i: number) => {
    setFormIndex(i);
    router.push(`?tab=${i}`);
  };

  return (
    <div className="register-form-wrapper">
      <div className="register-form bg-slate-300 max-w-md flex flex-col m-auto p-8 rounded-lg">
        <h3 className="text-xl text-center font-bold pb-5">Регистрация</h3>
        <Tabs
          variant="enclosed"
          colorScheme="gray"
          index={formIndex}
          onChange={handleChangeIndex}
        >
          <TabList>
            <Tab>Пользователь</Tab>
            <Tab>Компания</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="p-0">
              <UserRegisterForm />
            </TabPanel>
            <TabPanel className="p-0">
              <CompanyRegisterForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default RegisterForm;
