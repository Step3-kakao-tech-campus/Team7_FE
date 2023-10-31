import styled from '@emotion/styled';
import RoadmapDetailInfo from '@/components/Roadmap/RoadmapDetail/RoadmapDetailInfo';
import RoadmapDeatilStep from '@/components/Roadmap/RoadmapDetail/RoadmapDetailStep';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const RoadmapDetail = () => {
  return (
    <RoadmapDetailPage>
      <RoadmapDetailInfo />
      <h2>STEP 목록</h2>
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
`;
