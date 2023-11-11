import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import { getRoadmapsById } from '@/api/roadmap';
import TILyHead from '@/components/common/NextHead/TILyHead';
import ManageLayout from '@/components/layout/ManageLayout';
import Table from '@/components/roadmap/manage/member/Table';
import { setLayout } from '@/utils/layout';

const Member = () => {
  return (
    <>
      <TILyHead title="TIL-y | STEP 관리" />
      <Header>구성원 관리</Header>
      <Table />
    </>
  );
};

setLayout(Member, ManageLayout);

export default Member;

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

export const Header = styled.h2`
  margin-bottom: 15px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    margin: 0;
    font-size: 0;
    visibility: hidden;
  }
`;
