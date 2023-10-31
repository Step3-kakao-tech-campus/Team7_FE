import styled from '@emotion/styled';
import RoadmapDetailInfo from '@/components/Roadmap/RoadmapDetail/RoadmapDetailInfo';
import RoadmapDeatilStep from '@/components/Roadmap/RoadmapDetail/RoadmapDetailStep';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const RoadmapDetail = () => {
  return (
    <RoadmapDetailPage>
      <RoadmapDetailInfo />
      <StepListHeader>STEP 목록</StepListHeader>
      <RoadmapDeatilStep />
    </RoadmapDetailPage>
  );
};

setLayout(RoadmapDetail, HeaderLayout, false);

export default RoadmapDetail;

const RoadmapDetailPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 930px;
  margin: 40px auto 0;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    margin-top: 20px;
    gap: 20px;
  }
`;

const StepListHeader = styled.h2`
  padding: 0 15px;
  font-size: 22px;
`;
