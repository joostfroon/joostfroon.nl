import type { AppProps } from 'next/app';
import { Raleway } from '@next/font/google';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../layout/global-style';
import theme from '../layout/theme';

const raleway = Raleway({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'fallback',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle fontFamily={raleway.style.fontFamily} />
      <Normalize />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
