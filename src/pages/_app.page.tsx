import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { ContextProvider } from '~/contexts';
import { GlobalStyles, theme } from '~/styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyles />
        <Head>
          <title>Ádisson</title>
        </Head>
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
