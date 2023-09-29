import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import ToastProvider from '@/components/common/Toast/provider';
import { emotionTheme } from '@/styles/emotion';
import '@/styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  if (typeof window === 'undefined') {
    (async () => {
      const { server } = await import('../mocks/server');
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import('../mocks/browser');
      worker.start();
    })();
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={emotionTheme}>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </ThemeProvider>
  );
}
