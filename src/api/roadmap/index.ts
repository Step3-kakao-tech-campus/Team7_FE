import { axiosInstance } from '@/api';
import type {
  GetRoadmapsResponse,
  PostRoadmapsIndividualResponse,
  GetRoadmapStepsResponse,
  PostRoadmapStepIndividualResponse,
  GetRoadmapStepReferenceRequest,
  GetRoadmapStepReferenceResponse,
} from '@/api/roadmap/type';

export const getRoadmaps = async () => {
  const { data } = await axiosInstance.request<GetRoadmapsResponse>({
    method: 'GET',
    url: `/roadmaps/my/`,
  });

  return data;
};

export const getRoadmapSteps = async (roadmapId: string) => {
  const { data } = await axiosInstance.request<GetRoadmapStepsResponse>({
    method: 'GET',
    url: `/roadmaps/${roadmapId}/steps`,
  });

  return data;
};

export const getRoadmapStepReference = async (body: GetRoadmapStepReferenceRequest) => {
  const { roadmapId, stepId } = body;

  const { data } = await axiosInstance.request<GetRoadmapStepReferenceResponse>({
    method: 'GET',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/references`,
  });

  return data;
};

export const postRoadmapIndividual = async (name: string) => {
  const { data } = await axiosInstance.request<PostRoadmapsIndividualResponse>({
    method: 'POST',
    url: `/roadmaps/individual`,
    data: { name },
  });

  return data;
};

export const postRoadmapStepIndividual = async ({ roadmapId, title }: { roadmapId: string; title: string }) => {
  const { data } = await axiosInstance.request<PostRoadmapStepIndividualResponse>({
    method: 'POST',
    url: `/roadmaps/individual/${roadmapId}/steps`,
    data: { title },
  });

  return data;
};
