import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import PasswordForm from '@/components/auth/change-password/PasswordForm';
import TILyHead from '@/components/common/NextHead/TILyHead';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

const ChangePasswordPage = () => {
  return (
    <AuthPageContainer>
      <TILyHead title="TIL-y | 비밀번호 변경" />
      <PasswordForm />
    </AuthPageContainer>
  );
};

setLayout(ChangePasswordPage, FullHeightLayout);

export default ChangePasswordPage;

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
        destination: '/auth/change-password/verify',
        permanent: false,
      },
    };
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
