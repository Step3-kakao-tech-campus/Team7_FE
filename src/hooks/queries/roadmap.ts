import { useQuery } from '@tanstack/react-query';
import { getRoadmaps } from '@/api/roadmap';

const QUERY_KEY = {
  getRoadmaps: 'getRoadmaps',
};

export const useGetRoadmaps = () => {
  const { data } = useQuery([QUERY_KEY.getRoadmaps], () => getRoadmaps());

  const categoryData = {
    category: data?.result.category ?? [],
    roadmaps: [...(data?.result.roadmap.tily ?? []), ...(data?.result.roadmap.group ?? [])],
  };

  return {
    data: categoryData,
  };
};
