import { axiosInstance } from '@/api';
import type { TilsRequest, TilsResponse, PostTilsIndividualResponse } from '@/api/til/type';

export const getTils = async (input: TilsRequest) => {
  const { data } = await axiosInstance.request<TilsResponse>({
    method: 'GET',
    url: `/tils/my/${input}`,
  });

  return data;
};

export const postTilsIndividual = async ({ categoryId, title }: { categoryId: number; title: string }) => {
  const { data } = await axiosInstance.request<PostTilsIndividualResponse>({
    method: 'POST',
    url: `/roadmaps/individual/${categoryId}/steps`,
    data: { title },
  });

  return data;
};
