import { useQueryClient } from '@tanstack/react-query';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getRoadmapSteps,
  getRoadmaps,
  postRoadmapStepIndividual as postRoadmapStepIndividualAPI,
  postRoadmapIndividual as postRoadmapIndividualAPI,
  getRoadmapStepReference,
  postRoadmaps as postRoadmapsAPI,
} from '@/api/roadmap';
import type { GetRoadmapStepReferenceRequest } from '@/api/roadmap/type';
import type { RoadmapForm } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';

export const ROADMAP_QUERY_KEY = {
  getRoadmaps: 'getRoadmaps',
  getRoadmapSteps: 'getRoadmapSteps',
};

export const useGetRoadmaps = () => {
  const { data } = useQuery([ROADMAP_QUERY_KEY.getRoadmaps], () => getRoadmaps());

  const categoryData = {
    category: data?.result.categories ?? [],
    roadmaps: [...(data?.result.roadmaps.tily ?? []), ...(data?.result.roadmaps.group ?? [])],
  };

  return {
    data: categoryData,
  };
};

export const useGetRoadmapSteps = (roadmapId: number) => {
  const enabled = roadmapId !== 0;

  const { data, isLoading } = useQuery(
    [ROADMAP_QUERY_KEY.getRoadmapSteps, roadmapId],
    () => getRoadmapSteps(roadmapId),
    {
      enabled,
    },
  );

  return {
    steps: data,
    isLoading,
  };
};

export const useGetRoadmapStepReference = (body: GetRoadmapStepReferenceRequest) => {
  const enabled = !!body.roadmapId && !!body.roadmapId;

  const { data, isLoading } = useQuery([ROADMAP_QUERY_KEY.getRoadmapSteps, body], () => getRoadmapStepReference(body), {
    enabled,
  });

  return {
    reference: data?.result,
    isLoading,
  };
};

export const usePostRoadmapIndividual = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postRoadmapIndividualAPI);

  const postRoadmapsIndividual = async (title: string) => {
    const data = await mutation.mutateAsync(title, {
      onSuccess: () => {
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmaps]);
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
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapSteps, body.roadmapId]);
      },
    });

    return data;
  };
  return { postRoadmapStepIndividual };
};

export const usePostRoadmaps = () => {
  const { mutateAsync, isLoading } = useMutation(postRoadmapsAPI);

  const postRoadmaps = async (body: RoadmapForm) => {
    const data = await mutateAsync(body);

    return data;
  };

  return { postRoadmaps, isLoading };
};
