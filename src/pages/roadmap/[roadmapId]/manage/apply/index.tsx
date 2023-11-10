import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import TILyHead from '@/components/common/NextHead/TILyHead';
import ManageLayout from '@/components/layout/ManageLayout';
import ApplyTable from '@/components/roadmap/manage/apply/Table';
import { Header } from '@/pages/roadmap/[roadmapId]/manage/member';
import { setLayout } from '@/utils/layout';

const Apply = () => {
  return (
    <>
      <TILyHead title="TIL-y | 신청 관리" />
      <Header>신청 관리</Header>
      <ApplyTable />
    </>
  );
};

setLayout(Apply, ManageLayout);

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

export default Apply;
