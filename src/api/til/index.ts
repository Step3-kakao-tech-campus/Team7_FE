import { axiosInstance } from '@/api';
import type { TilsRequest, TilsResponse } from '@/api/til/type';

export const getTils = async ({ roadmapId, page, date, title }: TilsRequest) => {
  const { data } = await axiosInstance.request<TilsResponse>({
    method: 'GET',
    url: `/tils/my`,
    params: {
      roadmapId,
      page,
      date,
      title,
    },
  });

  return data;
};
