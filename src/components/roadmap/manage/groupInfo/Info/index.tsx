import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import Flex from '@/components/common/Flex';
import InfoSection from '@/components/roadmap/common/RoadmapInfoForm';
import StepSection from '@/components/roadmap/roadmapCreate/StepSection';
import useQueryParam from '@/hooks/useQueryParam';

const Info = () => {
  const roadmapId = useQueryParam('roadmapId');

  const { isLoading } = useGetRoadmapsById({ roadmapId: Number(roadmapId) });

  if (isLoading) {
    return <></>;
  }

  return (
    <Flex dir="col" gap={3}>
      <InfoSection />
      {/* <StepSection where="manage" /> */}
    </Flex>
  );
};

export default Info;
