import '../app/styles/global.scss';
import type { AppProps } from 'next/app';
import Header from '../widgets/Header';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import Footer from '../widgets/Footer';
import SetAuth from '../features/SetAuth';
import store from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SetAuth />
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
