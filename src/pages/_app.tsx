import '../styles/reset.css';
import '../styles/common.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';

const Header = styled.header`
`

const HeaderTitle = styled.h1`
  font-size: 3.0rem;
  text-align: center;
`

const HeaderLink = styled.a`
  display: block;
  text-decoration: none;
  color: #cccccc;
  
  &:visited {
    color: #cccccc;
  }
`

const PageFooter = styled.footer`
  text-align: center;
  margin-top: 30px;
`

const TwitterIconLink = styled.a`
  display: inline-block;
  text-align: center;
  margin: 0 auto;
`

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header>
        <HeaderTitle><HeaderLink href="/">コウテイペンギンの地団駄</HeaderLink></HeaderTitle>
      </Header>
      <Component {...pageProps} />
      <PageFooter>
        <TwitterIconLink href="/"><img src="/twitter.svg" alt="twitter" width="32px" height="32px" /></TwitterIconLink>
      </PageFooter>
    </>
  );
}
