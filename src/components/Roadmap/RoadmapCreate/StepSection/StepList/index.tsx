import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import StepBox from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/style';
import { roadmapStepAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';

const StepList = () => {
  const stepList = useRecoilValue(roadmapStepAtoms);

  if (stepList.length === 0) return <StepList.Empty />;
  else {
    return (
      <Styled.Root>
        {stepList.map((step, idx) => (
          <StepBox key={idx} idx={idx} step={step} where="create" />
        ))}
      </Styled.Root>
    );
  }
};

StepList.Empty = function Empty() {
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_step.svg" alt="stepEmptyIcon" width={50} height={50} />
      <h3>생성된 STEP이 없습니다.</h3>
    </Styled.EmptyRoot>
  );
};

export default StepList;
