import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import MyRoadmap from '@/components/Roadmap/RoadmapList/MyRoadmap';
import RecruitRoadmap from '@/components/Roadmap/RoadmapList/RecruitRoadmap';
import GNB from '@/components/common/GNB';
import GuestGNB from '@/components/common/GuestGNB';

interface RoadmapListProps {
  isUserLogin: boolean;
}

const RoadmapList = ({ isUserLogin }: RoadmapListProps) => {
  return (
    <>
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
  gap: 2rem;
  max-width: 960px;
  padding: 0 40px;
  margin: 3rem auto 0;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    margin: 20px auto;
    padding: 0 10px;
    gap: 15px;
  }
`;
