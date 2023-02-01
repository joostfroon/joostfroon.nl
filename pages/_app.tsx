import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Raleway } from '@next/font/google';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../layout/global-style';
import theme from '../layout/theme';
import { ProjectInterface, PersonalInterface } from '../interfaces';

interface Props {
  data?: {
    projects: ProjectInterface[];
    personal: PersonalInterface;
  }
}

const raleway = Raleway({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'fallback',
});

export default function App({ Component, pageProps }: AppProps) {
  const { data } = pageProps as Props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle fontFamily={raleway.style.fontFamily} />
      <Normalize />
      {data?.personal && (
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{data.personal.description} | {data.personal.name}</title>
          <meta name="title" content={data.personal.title} />
          <meta name="description" content={data.personal.description} />
          <meta name="theme-color" content="#000" />
          <meta property="og:title" content={data.personal.title} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={data.personal.image.url} />
          <meta property="og:description" content={data.personal.description} />
          <meta property="og:url" content={data.personal.website} />
          <meta property="og:image:alt" content={data.personal.title} />
          <meta name="application-name" content={data.personal.name} />
        </Head>
      )}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
