import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import RegisterForm from '@/components/auth/register/RegisterForm';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

export const RegisterPage = () => {
  return (
    <AuthPageContainer>
      <RegisterForm />
    </AuthPageContainer>
  );
};

setLayout(RegisterPage, FullHeightLayout);

export default RegisterPage;

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
