import { GlobalStyles } from '../styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
