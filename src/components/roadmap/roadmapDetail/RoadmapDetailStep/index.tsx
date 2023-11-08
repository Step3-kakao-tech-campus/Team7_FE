import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import StepBox from '@/components/roadmap/manage/step/StepList/StepBox';
import useQueryParam from '@/hooks/useQueryParam';

const RoadmapDetailStep = () => {
  const roadmapId = useQueryParam('roadmapId');

  const { data } = useGetRoadmapsById({ roadmapId: Number(roadmapId) });

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
