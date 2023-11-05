import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useGetKakaoLogin } from '@/api/hooks/auth';
import Flex from '@/components/common/Flex';
import Spinner from '@/components/common/Spinner';
import TILY_LINKS from '@/constants/links';
import useQueryParam from '@/hooks/useQueryParam';

const KakaoLoginPage = () => {
  const code = useQueryParam('code');
  const router = useRouter();
  const { getKakaoLoginAsync, isLoading } = useGetKakaoLogin();

  useEffect(() => {
    async function KakaoLogin() {
      const data = await getKakaoLoginAsync({ code: code });
      if (data.code === 200) {
        router.push(TILY_LINKS.home());
      }
    }
    if (code) {
      KakaoLogin();
    }
  }, [code]);

  if (isLoading) {
    return (
      <CallbackPage dir="col" align="center" justify="center" gap={3}>
        <h3>로그인 정보를 가져오는 중입니다.</h3>
        <Spinner
          width={5}
          height={5}
          css={css`
            & > div {
              border-color: black transparent transparent transparent;
            }
          `}
        />
      </CallbackPage>
    );
  }

  return <></>;
};

export default KakaoLoginPage;

const CallbackPage = styled(Flex)`
  height: 100vh;
`;
