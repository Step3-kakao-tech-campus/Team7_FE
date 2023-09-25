import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { emotionTheme } from '@/styles/emotion';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={emotionTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
