import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import StepSection from '@/components/Roadmap/RoadmapCreate/StepSection';
import InfoSection from '@/components/Roadmap/common/RoadmapInfoForm';
import Flex from '@/components/common/Flex';
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
