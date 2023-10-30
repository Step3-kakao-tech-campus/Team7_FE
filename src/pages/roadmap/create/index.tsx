import { useResetRecoilState } from 'recoil';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import InfoSection from '@/components/Roadmap/RoadmapCreate/InfoSection';
import StepSection from '@/components/Roadmap/RoadmapCreate/StepSection';
import { roadmapInfoAtoms, roadmapStepAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const RoadmapCreate = () => {
  const resetRoadmapInfo = useResetRecoilState(roadmapInfoAtoms);
  const resetRoadmapStep = useResetRecoilState(roadmapStepAtoms);

  useEffect(() => {
    resetRoadmapInfo();
    resetRoadmapStep();
  }, [resetRoadmapInfo, resetRoadmapStep]);

  return (
    <RoadmapCreatePage>
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
  max-width: 930px;
  margin: 0 auto;
  padding: 0 15px;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    & label > div {
      font-size: 18px;
      font-weight: 600;
    }

    & h3 {
      font-weight: 600;
    }

    & label input,
    textarea {
      font-size: 15px;
    }
  }
`;
