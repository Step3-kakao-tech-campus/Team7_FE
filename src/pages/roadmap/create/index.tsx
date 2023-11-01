import { useResetRecoilState } from 'recoil';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import InfoSection from '@/components/Roadmap/RoadmapCreate/InfoSection';
import StepSection from '@/components/Roadmap/RoadmapCreate/StepSection';
import { roadmapAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const RoadmapCreate = () => {
  const resetRoadmap = useResetRecoilState(roadmapAtoms);

  useEffect(() => {
    resetRoadmap();
  }, [resetRoadmap]);

  return (
    <RoadmapCreatePage>
      <InfoSection where="create" />
      <StepSection where="create" />
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

  @media ${({ theme }) => theme.mediaQuery.xs} {
    gap: 1rem;

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
