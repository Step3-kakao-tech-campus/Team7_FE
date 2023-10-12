import { useQueryClient } from '@tanstack/react-query';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getRoadmapSteps,
  getRoadmaps,
  postRoadmapStepIndividual as postRoadmapStepIndividualAPI,
  postRoadmapsIndividual as postRoadmapsIndividualAPI,
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

export const useGetRoadmapSteps = (roadmapId: number) => {
  const enabled = roadmapId !== 0;

  const { data } = useQuery([QUERY_KEY.getRoadmapSteps, roadmapId], () => getRoadmapSteps(roadmapId), { enabled });

  return {
    steps: data,
  };
};

export const usePostRoadmapsIndividual = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postRoadmapsIndividualAPI);

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

  const postRoadmapStepIndividual = async (body: { roadmapId: number; title: string }) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        console.log('이거 실행됩니깐');
        queryClient.invalidateQueries([QUERY_KEY.getRoadmapSteps, body.roadmapId]);
      },
    });

    return data;
  };
  // useMutation 훅을 밖으로 내보내지 않아도, 비즈니스 로직 함수 작성해서 내보내면 된다.
  return { postRoadmapStepIndividual };
};
