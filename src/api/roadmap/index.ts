import { axiosInstance } from '@/api';
import type { UserRoadmapsResponse, PostRoadmapsIndividualResponse, GetRoadmapStepsResponse } from '@/api/roadmap/type';

export const getRoadmaps = async () => {
  const { data } = await axiosInstance.request<UserRoadmapsResponse>({
    method: 'GET',
    url: `/roadmaps/my/`,
  });

  return data;
};

export const getRoadmapSteps = async (roadmapId: number) => {
  const { data } = await axiosInstance.request<GetRoadmapStepsResponse>({
    method: 'GET',
    url: `/roadmaps/${roadmapId}/steps`,
  });

  return data;
};
