import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import TILyHead from '@/components/common/NextHead/TILyHead';
import GuestGNB from '@/components/gnb/GuestGNB';
import GNB from '@/components/gnb/UserGNB';
import MyRoadmap from '@/components/roadmap/roadmapList/MyRoadmap';
import RecruitRoadmap from '@/components/roadmap/roadmapList/RecruitRoadmap';

interface RoadmapListProps {
  isUserLogin: boolean;
}

const RoadmapList = ({ isUserLogin }: RoadmapListProps) => {
  return (
    <>
      <TILyHead title="TIL-y | 로드맵" />
      {isUserLogin ? <GNB /> : <GuestGNB />}
      <RoadmapListPage>
        {isUserLogin && <MyRoadmap />}
        <RecruitRoadmap />
      </RoadmapListPage>
    </>
  );
};

export default RoadmapList;

export const getServerSideProps: GetServerSideProps<RoadmapListProps> = async (context) => {
  const { cookies } = context.req;
  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  return {
    props: {
      isUserLogin,
    },
  };
};

const RoadmapListPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 1120px;
  margin: 30px auto 0;
  padding: 0 40px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 15px;
    margin-top: 15px;
  }
`;
