import '../styles/reset.css';
import '../styles/common.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';

const PageFooter = styled.footer`

`

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <PageFooter>
        hogefuga
      </PageFooter>
    </>
  );
}
