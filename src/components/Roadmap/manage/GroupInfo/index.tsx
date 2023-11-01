import { useRouter } from 'next/router';
import { useGetRoadmapsByIdManage } from '@/api/hooks/roadmap';
import InfoSection from '@/components/Roadmap/RoadmapCreate/InfoSection';
import useQueryParam from '@/hooks/useQueryParam';

const GroupInfo = () => {
  const router = useRouter();
  const roadmapId = useQueryParam(router.query.roadmapId);

  const { isLoading } = useGetRoadmapsByIdManage(Number(roadmapId));

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <InfoSection where="edit" />
    </>
  );
};

export default GroupInfo;
