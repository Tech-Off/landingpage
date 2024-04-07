import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    line-height: normal;
    font-family: 'Poppins', sans-serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>onBoardMe</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
