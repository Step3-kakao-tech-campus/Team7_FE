import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@emotion/react';
import GlobalErrorBoundary from '@/components/common/GlobalErrorBoundary';
import ResponsiveProvider from '@/components/common/Responsive/provider';
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

// 크롬이 online 일때 리액트 쿼리가 동작하도록 함.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'always',
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      retry: 0,
    },
    mutations: {
      networkMode: 'always',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const Layout = getLayout(Component);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={emotionTheme}>
          <ResponsiveProvider>
            <ToastProvider>
              <QueryErrorResetBoundary>
                {({ reset }) => (
                  <ErrorBoundary
                    onReset={reset}
                    fallbackRender={({ error, resetErrorBoundary }) => {
                      return <GlobalErrorBoundary error={error} resetErrorBoundary={resetErrorBoundary} />;
                    }}>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </ErrorBoundary>
                )}
              </QueryErrorResetBoundary>
            </ToastProvider>
          </ResponsiveProvider>
        </ThemeProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
