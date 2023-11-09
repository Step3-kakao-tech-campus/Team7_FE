import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import cookies from 'next-cookies';
import type { AppProps, AppContext } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@emotion/react';
import { axiosInstance } from '@/api';
import GlobalErrorBoundary from '@/components/common/GlobalErrorBoundary';
import ResponsiveProvider from '@/components/common/Responsive/provider';
import ToastProvider from '@/components/common/Toast/provider';
import { emotionTheme } from '@/styles/emotion';
import '@/styles/globals.css';
import { getLayout } from '@/utils/layout';

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

interface MyAppProps extends AppProps {
  token: boolean;
}

export default function App({ Component, pageProps, token }: MyAppProps) {
  const Layout = getLayout(Component);
  axiosInstance.defaults.headers.common['Authorization'] = token;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
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
      </Hydrate>
    </QueryClientProvider>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  const allCookies = cookies(ctx);

  let pageProps = {};

  if (Component.getInitialProps) {
    // Component의 context로 ctx를 넣어주자
    pageProps = await Component.getInitialProps(ctx);
  }
  // return한 값은 해당 컴포넌트의 props로 들어가게 됩니다.
  return { pageProps, token: allCookies.accessToken };
};
