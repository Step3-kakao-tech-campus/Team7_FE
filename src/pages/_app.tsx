import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import ToastProvider from '@/components/common/Toast/provider';
import { emotionTheme } from '@/styles/emotion';
import '@/styles/globals.css';
import { getLayout } from '@/utils/layout';

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
  const Layout = getLayout(Component);

  return (
    <ThemeProvider theme={emotionTheme}>
      <ToastProvider>
        <Layout>
          {' '}
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </ThemeProvider>
  );
}
