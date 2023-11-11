import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import { getRoadmapsById } from '@/api/roadmap';
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
  const param = context.params;
  const roadmapId = param?.roadmapId;

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

  const data = await getRoadmapsById({ roadmapId: Number(roadmapId) });

  const myRole = data.result.myRole;

  if (myRole === 'none' || myRole === 'member') {
    return {
      redirect: {
        destination: `/roadmap/${roadmapId}`,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Apply;
