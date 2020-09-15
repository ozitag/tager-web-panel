import React from 'react';
import { AppProps } from 'next/app';
import '../assets/css/index.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CustomApp;
