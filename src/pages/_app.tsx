import '../app/styles/global.scss';
import type { AppProps } from 'next/app';
import Header from '../widgets/Header';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import Footer from '../widgets/Footer';
import AuthWrapper from '../entities/AuthWrapper';
import { store } from '../app';
import OnlineWrapper from '../features/OnlineWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <AuthWrapper>
          <OnlineWrapper>
            <div className="wrapper min-max-width">
              <Header />
              <main>
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
          </OnlineWrapper>
        </AuthWrapper>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
