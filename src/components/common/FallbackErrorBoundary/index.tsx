import type { PropsWithChildren } from 'react';
import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

interface FallbackErrorBoundaryProps {
  fallbackRender: (props: FallbackProps) => ReactNode;
}

const FallbackErrorBoundary = (props: PropsWithChildren<FallbackErrorBoundaryProps>) => {
  const { children, fallbackRender } = props;

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={fallbackRender}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default FallbackErrorBoundary;
