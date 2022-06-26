import { ThemeProvider } from 'styled-components';

import { ContextProvider } from '~/contexts';
import { GlobalStyles, theme } from '~/styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
