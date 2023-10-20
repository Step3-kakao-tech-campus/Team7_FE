import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';

const Custom404 = () => {
  const router = useRouter();

  return (
    <Root>
      <Image src="/assets/icons/404.svg" width={300} height={300} alt="404" />
      <h1>잘못된 접근입니다</h1>
      <Button variant="default" onClick={() => router.back()} css={ButtonStyles}>
        이전 페이지 이동
      </Button>
    </Root>
  );
};

export default Custom404;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100%;
`;

const ButtonStyles = css`
  font-size: 1.125rem;
  font-weight: 600;
`;
