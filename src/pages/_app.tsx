import '../app/styles/global.scss';
import type { AppProps } from 'next/app';
import Header from '../widgets/Header';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
