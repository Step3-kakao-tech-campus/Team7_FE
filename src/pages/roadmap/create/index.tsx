import styled from '@emotion/styled';
import Header from '@/components/Roadmap/RoadmapCreate/Header';
import InfoSection from '@/components/Roadmap/RoadmapCreate/InfoSection';
import StepSection from '@/components/Roadmap/RoadmapCreate/StepSection';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const RoadmapCreate = () => {
  return (
    <RoadmapCreatePage>
      <Header />
      <InfoSection />
      <StepSection />
    </RoadmapCreatePage>
  );
};

setLayout(RoadmapCreate, HeaderLayout, true);

export default RoadmapCreate;

const RoadmapCreatePage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;
