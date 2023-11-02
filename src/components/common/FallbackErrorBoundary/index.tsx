import type { PropsWithChildren } from 'react';
import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import ThrowCommonError from '@/components/common/FallbackErrorBoundary/ThrowCommonError';

interface FallbackErrorBoundaryProps {
  FallbackRender: (props: FallbackProps) => ReactNode;
}

const FallbackErrorBoundary = (props: PropsWithChildren<FallbackErrorBoundaryProps>) => {
  const { children, FallbackRender } = props;

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => {
            return (
              <ThrowCommonError error={error} resetErrorBoundary={resetErrorBoundary}>
                <FallbackRender error={error} resetErrorBoundary={resetErrorBoundary} />
              </ThrowCommonError>
            );
          }}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default FallbackErrorBoundary;
