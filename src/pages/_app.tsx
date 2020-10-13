import { reset } from 'stitches-reset';
import { css } from '@design/stitches.config';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import '@design/styles/global.css';

css.global(reset);

const MyApp: React.FC<AppProps> = ({ Component, pageProps, err }) => {
  return <Component {...pageProps} err={err} />;
};

export default MyApp;
