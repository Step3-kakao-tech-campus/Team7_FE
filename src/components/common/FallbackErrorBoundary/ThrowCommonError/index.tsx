import { isAxiosError } from 'axios';
import type { PropsWithChildren } from 'react';
import type { ErrorBoundaryProps } from '@/components/common/GlobalErrorBoundary';

const ThrowCommonError = (props: PropsWithChildren<ErrorBoundaryProps>) => {
  const { error, children } = props;

  if (!isAxiosError(error)) {
    throw error;
  }

  if (error.response?.status === 403) {
    throw error;
  }

  return <>{children}</>;
};

export default ThrowCommonError;
