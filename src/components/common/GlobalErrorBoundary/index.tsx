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

  const router = useRouter();

  return (
    <Styled.Root>
      <Image src="/assets/icons/500.svg" width={300} height={300} alt="페이지 에러" />
      <h1>오류가 발생했습니다</h1>
      <Button variant="default" onClick={() => router.back()} css={Styled.ButtonStyles}>
        이전 페이지 이동
      </Button>
    </Styled.Root>
  );
};

export default GlobalErrorBoundary;
