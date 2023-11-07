import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import EmptyLayout from '@/components/layout/EmptyLayout';
import TILViewSection from '@/components/tilView/TILViewSection';
import { setLayout } from '@/utils/layout';

const TILView = () => {
  return (
    <TILViewPage>
      <TILViewSection />
    </TILViewPage>
  );
};

export default TILView;

setLayout(TILView, EmptyLayout);

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

export const TILViewPage = styled.div`
  overflow-x: hidden;
  height: 100%;
`;
