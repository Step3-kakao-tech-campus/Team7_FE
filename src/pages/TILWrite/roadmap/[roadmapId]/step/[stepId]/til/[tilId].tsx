import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import TILWriteSection from '@/components/TILWrite/TILWriteSection';
import EmptyLayout from '@/components/layout/EmptyLayout';
import { setLayout } from '@/utils/layout';

const TILWrite = () => {
  return (
    <TILWritePage>
      <TILWriteSection />
    </TILWritePage>
  );
};

export default TILWrite;

setLayout(TILWrite, EmptyLayout);

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
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export const TILWritePage = styled.div`
  overflow-x: hidden;
  height: 100%;
`;
