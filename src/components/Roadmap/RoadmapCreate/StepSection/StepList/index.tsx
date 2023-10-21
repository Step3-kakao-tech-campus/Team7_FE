import Image from 'next/image';
import StepBox from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/style';
import type { Step } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';

interface StepListProps {
  stepList: Step[];
}

const StepList = (props: StepListProps) => {
  const { stepList } = props;

  return (
    <Styled.Root>
      {stepList.map((step, idx) => (
        <StepBox key={idx} idx={idx} step={step} />
      ))}
    </Styled.Root>
  );
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
