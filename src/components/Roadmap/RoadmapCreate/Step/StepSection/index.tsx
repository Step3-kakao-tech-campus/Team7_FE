import Image from 'next/image';
import * as Styled from '@/components/Roadmap/RoadmapCreate/Step/StepSection/style';

const StepSection = () => {};

StepSection.Empty = function Empty() {
  return (
    <Styled.Root>
      <Image src="/assets/icons/ic_step.svg" alt="stepEmptyIcon" width={50} height={50} />
      <h3>생성된 STEP이 없습니다.</h3>
    </Styled.Root>
  );
};

export default StepSection;
