import { useQueryClient } from '@tanstack/react-query';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getRoadmapSteps,
  getRoadmaps,
  postRoadmapStepIndividual as postRoadmapStepIndividualAPI,
  postRoadmapIndividual as postRoadmapIndividualAPI,
} from '@/api/roadmap';

const QUERY_KEY = {
  getRoadmaps: 'getRoadmaps',
  getRoadmapSteps: 'getRoadmapSteps',
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

export const useGetRoadmapSteps = (roadmapId: string) => {
  const enabled = roadmapId !== '' && roadmapId !== '0';

  // queryString에서 받아오는 roadmapId는 string이므로 api의 param을 string으로 통일해주었음
  const roadmapIdToString = roadmapId.toString();

  const { data, isLoading } = useQuery(
    [QUERY_KEY.getRoadmapSteps, roadmapId],
    () => getRoadmapSteps(roadmapIdToString),
    {
      enabled,
    },
  );

  return {
    steps: data,
    isLoading,
  };
};

export const usePostRoadmapIndividual = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postRoadmapIndividualAPI);

  const postRoadmapsIndividual = async (title: string) => {
    const data = await mutation.mutateAsync(title, {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.getRoadmaps]);
      },
    });

    return data;
  };
  // useMutation 훅을 밖으로 내보내지 않아도, 비즈니스 로직 함수 작성해서 내보내면 된다.
  return { postRoadmapsIndividual };
};

export const usePostRoadmapStepIndividual = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postRoadmapStepIndividualAPI);

  const postRoadmapStepIndividual = async (body: { roadmapId: string; title: string }) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.getRoadmapSteps, body.roadmapId]);
      },
    });

    return data;
  };
  return { postRoadmapStepIndividual };
};
