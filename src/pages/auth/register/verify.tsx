import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import SocialLogin from '@/components/auth/common/SocialLogin';
import VerifyForm from '@/components/auth/verify/VerifyForm';
import TILyHead from '@/components/common/NextHead/TILyHead';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { setLayout } from '@/utils/layout';

const RegisterVerifyPage = () => {
  return (
    <AuthPageContainer>
      <TILyHead title="TIL-y | 이메일 인증" />
      <VerifyForm location="register" />
      {/* <SocialLogin /> */}
    </AuthPageContainer>
  );
};

setLayout(RegisterVerifyPage, FullHeightLayout);

export default RegisterVerifyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cookies } = context.req;
  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  if (!isUserLogin) {
    return { props: {} };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export const AuthPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 450px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 100dvh;
  }
`;
