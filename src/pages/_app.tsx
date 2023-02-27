import '../app/styles/global.scss';
import type { AppProps } from 'next/app';
import Header from '../widgets/Header';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

import store from '../app/store';
import Footer from '../widgets/Footer';

// i18n.use(Backend).init({
//     ns: ['common'], // namespace used in your translation files
//     fallbackLng: 'en', // default language
//     preload: ['en', 'ru'], // languages to preload
//     backend: {
//         loadPath: '/locales/{{lng}}/{{ns}}.json',
//     },
// });

const { Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </Layout>
    </Provider>
  );
}

export default MyApp;
