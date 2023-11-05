import type { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { CommonResponse } from '@/api/type';
import Button from '@/components/common/Button';
import * as Styled from './style';

export interface ErrorBoundaryProps {
  error: AxiosError<CommonResponse>;
  resetErrorBoundary: () => void;
}

const GlobalErrorBoundary = (props: ErrorBoundaryProps) => {
  const { error, resetErrorBoundary } = props;

  if (error.response?.status === 500) {
    return <Fallback desc={'오류가 발생했습니다'} resetErrorBoundary={resetErrorBoundary} />;
  }

  if (error.response?.status === 403) {
    return <Fallback desc={'접근 권한이 없습니다'} resetErrorBoundary={resetErrorBoundary} />;
  }

  return <Fallback desc={'오류가 발생했습니다'} resetErrorBoundary={resetErrorBoundary} />;
};

export default GlobalErrorBoundary;

interface FallbackProps {
  desc: string;
  resetErrorBoundary: () => void;
}

const Fallback = (props: FallbackProps) => {
  const { desc, resetErrorBoundary } = props;

  const router = useRouter();

  return (
    <Styled.Root>
      <Image src="/assets/icons/500.svg" width={300} height={300} alt="페이지 에러" />
      <h1>{desc}</h1>
      <Button
        variant="default"
        onClick={() => {
          router.back();
          setTimeout(() => {
            resetErrorBoundary();
          }, 300);
        }}
        css={Styled.ButtonStyles}>
        이전 페이지 이동
      </Button>
    </Styled.Root>
  );
};
