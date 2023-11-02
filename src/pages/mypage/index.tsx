import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import HeaderLayout from '@/components/layout/HeaderLayout';
import DeleteUserSection from '@/components/mypage/DeleteUserSection';
import EditSection from '@/components/mypage/EditSection';
import ProfileSection from '@/components/mypage/ProfileSection';
import { setLayout } from '@/utils/layout';

const Mypage = () => {
  return (
    <Root>
      <Title>개인 정보 수정</Title>
      <ProfileSection />
      <EditSection />
      <DeleteUserSection />
    </Root>
  );
};

export default Mypage;

setLayout(Mypage, HeaderLayout);

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

const Root = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 16px;
  }
`;

const Title = styled.h1`
  margin-top: 3rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    margin-top: 1rem;
    font-size: 20px;
  }
`;
