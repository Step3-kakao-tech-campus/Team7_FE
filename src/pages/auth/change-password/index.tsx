import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import PasswordForm from '@/components/auth/change-password/passwordForm';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

const ChangePasswordPage = () => {
  return (
    <AuthPageContainer>
      <PasswordForm />
    </AuthPageContainer>
  );
};

setLayout(ChangePasswordPage, FullHeightLayout);

export default ChangePasswordPage;

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
