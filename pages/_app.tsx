import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '../src/widgets/Header';
import { Layout } from 'antd';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

const { Content } = Layout;

// i18n.use(Backend).init({
//     ns: ['common'], // namespace used in your translation files
//     fallbackLng: 'en', // default language
//     preload: ['en', 'ru'], // languages to preload
//     backend: {
//         loadPath: '/locales/{{lng}}/{{ns}}.json',
//     },
// });

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Layout>
         <Header />
         <Content>
            <Component {...pageProps} />
         </Content>
      </Layout>
   );
}

export default MyApp;
