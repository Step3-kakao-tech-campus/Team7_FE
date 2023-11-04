import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import GuestGNB from '@/components/GNB/GuestGNB';
import GNB from '@/components/GNB/UserGNB';
import MyRoadmap from '@/components/Roadmap/RoadmapList/MyRoadmap';
import RecruitRoadmap from '@/components/Roadmap/RoadmapList/RecruitRoadmap';

interface RoadmapListProps {
  isUserLogin: boolean;
}

const RoadmapList = ({ isUserLogin }: RoadmapListProps) => {
  return (
    <Root>
      {isUserLogin ? <GNB /> : <GuestGNB />}
      <RoadmapListPage>
        {isUserLogin && <MyRoadmap />}
        <RecruitRoadmap />
      </RoadmapListPage>
    </Root>
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

const Root = styled.div``;

const RoadmapListPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1120px;
  padding: 0 40px;
  margin: 40px auto 0;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    margin: 20px auto;
    padding: 0 10px;
    gap: 15px;
  }
`;
