import { useRecoilValue } from 'recoil';
import StepList from '@/components/Roadmap/RoadmapCreate/StepSection/StepList';
import StepBox from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/style';
import { roadmapStepAtoms } from '../../RoadmapCreate/states/roadmapCreateAtoms';

const RoadmapDetailStep = () => {
  const stepList = useRecoilValue(roadmapStepAtoms);

  if (stepList.length === 0) return <StepList.Empty />;
  else {
    return (
      <Styled.Root>
        {stepList.map((step, idx) => (
          <StepBox key={idx} idx={idx} step={step} />
        ))}
      </Styled.Root>
    );
  }
};

export default RoadmapDetailStep;
