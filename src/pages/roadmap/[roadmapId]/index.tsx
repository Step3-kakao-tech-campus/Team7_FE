import styled from '@emotion/styled';
import HeaderLayout from '@/components/layout/HeaderLayout';
import StepList from '@/components/roadmap/common/StepList';
import RoadmapDetailInfo from '@/components/roadmap/roadmapDetail/RoadmapDetailInfo';
import { RoadmapPage } from '@/pages/roadmap/create';
import { setLayout } from '@/utils/layout';

const RoadmapDetail = () => {
  return (
    <RoadmapPage>
      <RoadmapDetailInfo />
      <RoadmapDetailStepContainer>
        <h2>STEP 목록</h2>
        <StepList />
      </RoadmapDetailStepContainer>
    </RoadmapPage>
  );
};

setLayout(RoadmapDetail, HeaderLayout);

export default RoadmapDetail;

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
