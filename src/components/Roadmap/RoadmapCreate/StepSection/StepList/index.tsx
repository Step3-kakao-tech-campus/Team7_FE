import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import StepBox from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/style';
import { roadmapAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';

const StepList = () => {
  const roadmap = useRecoilValue(roadmapAtoms);

  if (roadmap.steps.length === 0) return <StepList.Empty />;
  else {
    return (
      <Styled.Root>
        {roadmap.steps.map((step, idx) => (
          <StepBox key={step.id ?? idx} idx={idx} step={step} where="create" />
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
