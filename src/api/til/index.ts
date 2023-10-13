import { axiosInstance } from '@/api';
import type { TilsRequest, TilsResponse, PostTilRequest, PostTilResponse } from '@/api/til/type';

export const getTils = async (input: TilsRequest) => {
  const { data } = await axiosInstance.request<TilsResponse>({
    method: 'GET',
    url: `/tils/my/${input}`,
  });

  return data;
};
//

export const postTil = async (body: PostTilRequest) => {
  const { roadmapId, stepId, title } = body;

  const { data } = await axiosInstance.request<PostTilResponse>({
    method: 'POST',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils`,
    data: { title },
  });

  return data;
};
