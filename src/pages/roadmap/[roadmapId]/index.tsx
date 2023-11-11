import type { GetServerSideProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import { getRoadmapsById } from '@/api/roadmap';
import TILyHead from '@/components/common/NextHead/TILyHead';
import GuestGNB from '@/components/gnb/GuestGNB';
import GNB from '@/components/gnb/UserGNB';
import StepList from '@/components/roadmap/common/StepList';
import RoadmapDetailInfo from '@/components/roadmap/roadmapDetail/RoadmapDetailInfo';
import { RoadmapPage } from '@/pages/roadmap/create';

interface RoadmapDetailProps {
  isUserLogin: boolean;
}

const RoadmapDetail = ({ isUserLogin }: RoadmapDetailProps) => {
  return (
    <>
      <TILyHead title="TIL-y | 로드맵" />
      {isUserLogin ? <GNB /> : <GuestGNB />}
      <RoadmapPage>
        <RoadmapDetailInfo isUserLogin={isUserLogin} />
        <RoadmapDetailStepContainer>
          <h2>STEP 목록</h2>
          <StepList />
        </RoadmapDetailStepContainer>
      </RoadmapPage>
    </>
  );
};

export default RoadmapDetail;

export const getServerSideProps: GetServerSideProps<RoadmapDetailProps> = async (context) => {
  const { cookies } = context.req;
  const param = context.params;
  const roadmapId = param?.roadmapId;
  const queryClient = new QueryClient();

  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  // 로드맵 정보 SSR
  await queryClient.prefetchQuery(['roadmaps', Number(roadmapId)], () =>
    getRoadmapsById({ roadmapId: Number(roadmapId) }),
  );

  return {
    props: {
      isUserLogin,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const RoadmapDetailStepContainer = styled.section`
  margin-top: 30px;
  padding: 0 15px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0;

    & > h2 {
      padding: 0 15px;
    }
  }
`;
