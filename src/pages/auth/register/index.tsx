import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import RegisterForm from '@/components/auth/register/RegisterForm';
import TILyHead from '@/components/common/NextHead/TILyHead';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

export const RegisterPage = () => {
  return (
    <AuthPageContainer>
      <TILyHead title="TIL-y | 회원가입" />
      <RegisterForm />
    </AuthPageContainer>
  );
};

setLayout(RegisterPage, FullHeightLayout);

export default RegisterPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cookies } = context.req;
  const { query } = context;

  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  // email 쿼리가 없다면 해당 페이지에 접근할 수 없도록 함.
  if (query.email == undefined) {
    return {
      redirect: {
        destination: '/auth/register/verify',
        permanent: false,
      },
    };
  }

  // 로그인 여부에 따른 라우팅 처리
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
