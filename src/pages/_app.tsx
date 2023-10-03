import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={emotionTheme}>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
