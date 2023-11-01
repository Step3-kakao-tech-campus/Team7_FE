import { useRouter } from 'next/router';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import InfoSection from '@/components/Roadmap/RoadmapCreate/InfoSection';
import StepSection from '@/components/Roadmap/RoadmapCreate/StepSection';
import Flex from '@/components/common/Flex';
import useQueryParam from '@/hooks/useQueryParam';

const Info = () => {
  const router = useRouter();
  const roadmapId = useQueryParam(router.query.roadmapId);

  const { isLoading } = useGetRoadmapsById(Number(roadmapId));

  if (isLoading) {
    return <></>;
  }

  return (
    <Flex dir="col" gap={3}>
      <InfoSection where="manage" />
      <StepSection where="manage" />
    </Flex>
  );
};

export default Info;
