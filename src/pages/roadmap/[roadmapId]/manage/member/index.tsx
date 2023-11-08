import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import ManageLayout from '@/components/layout/ManageLayout';
import Table from '@/components/roadmap/manage/member/Table';
import { setLayout } from '@/utils/layout';

const Member = () => {
  return (
    <RightArea>
      <Header>구성원 관리</Header>
      <Table />
    </RightArea>
  );
};

setLayout(Member, ManageLayout);

export default Member;

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

export const RightArea = styled.main`
  max-width: 1100px;
  width: 70vw;
  padding: 40px 80px 80px 80px;
  flex: 1;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 40px 56px 80px 56px;
    width: auto;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    padding: 20px 48px;
    width: auto;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    padding: 0;
    width: auto;
  }
`;

export const Header = styled.h1`
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    width: 100%;
    justify-content: space-between;
    padding: 8px;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    display: none;
  }
`;
