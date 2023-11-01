import { useRouter } from 'next/router';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import StepList from '@/components/Roadmap/RoadmapCreate/StepSection/StepList';
import StepBox from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/style';
import useQueryParam from '@/hooks/useQueryParam';

const RoadmapDetailStep = () => {
  const router = useRouter();
  const roadmapId = useQueryParam(router.query.roadmapId);

  const data = useGetRoadmapsById(Number(roadmapId));

  if (data?.result.steps.length === 0) return <StepList.Empty />;
  else {
    return (
      <Styled.Root>
        {data?.result.steps.map((step, idx) => <StepBox key={step.id} idx={idx} step={step} where={'detail'} />)}
      </Styled.Root>
    );
  }
};

export default RoadmapDetailStep;