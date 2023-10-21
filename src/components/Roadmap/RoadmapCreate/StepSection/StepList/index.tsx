import Image from 'next/image';
import StepBox from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/style';
import type { Step } from '@/pages/roadmap/create';

interface StepListProps {
  stepList: Step[];
  addYoutube: (idx: number, link: string) => void;
}

const StepList = (props: StepListProps) => {
  const { stepList, addYoutube } = props;

  return (
    <Styled.Root>
      {stepList.map((step, idx) => (
        <StepBox key={idx} idx={idx} step={step} addYoutube={addYoutube} />
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
