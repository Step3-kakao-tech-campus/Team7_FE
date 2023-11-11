import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import TILyHead from '@/components/common/NextHead/TILyHead';
import HeaderLayout from '@/components/layout/HeaderLayout';
import RoadmapInfoForm from '@/components/roadmap/common/RoadmapInfoForm';
import { setLayout } from '@/utils/layout';

const RoadmapCreate = () => {
  return (
    <RoadmapPage>
      <TILyHead title="TIL-y | 로드맵 생성" />
      <RoadmapInfoForm />
    </RoadmapPage>
  );
};

setLayout(RoadmapCreate, HeaderLayout);

export default RoadmapCreate;

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

export const RoadmapPage = styled.main`
  max-width: 930px;
  margin: 30px auto 0;

  @media ${({ theme }) => theme.mediaQuery.md} {
    margin-top: 15px;
  }
`;
