import styled from '@emotion/styled';
import Header from '@/components/Roadmap/RoadmapCreate/Header';
import StepSection from '@/components/Roadmap/RoadmapCreate/StepSection';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { useRoeadmapCreate } from '@/hooks/useRoedmapCreate';
import { setLayout } from '@/utils/layout';
import InfoSection from '../../../components/Roadmap/RoadmapCreate/InfoSection';

export interface RoadmapInfo {
  name: string;
  description: string;
  isPublic: boolean;
}

export interface Step {
  title: string;
  description: string;
  date: Date | null;
}

const RoadmapCreate = () => {
  const { info, step, stepList, valid, handleInfo, handleStep, resetStep, addStep } = useRoeadmapCreate(
    defaultInfo,
    defaultStep,
  );

  return (
    <RoadmapCreatePage>
      <Header />
      <InfoSection info={info} handleOnChange={handleInfo} />
      <StepSection
        step={step}
        stepList={stepList}
        valid={valid}
        handleOnChange={handleStep}
        resetStep={resetStep}
        addStep={addStep}
      />
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

const defaultInfo = { name: '', description: '', isPublic: true };

const defaultStep = { title: '', description: '', date: new Date() };
