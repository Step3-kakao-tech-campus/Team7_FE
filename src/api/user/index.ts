import { axiosInstance } from '@/api';
import type { UserHistoryResponse } from '@/api/user/types';

export const getUserHistory = async () => {
  const { data } = await axiosInstance.request<UserHistoryResponse>({
    method: 'GET',
    url: `/gardens`,
  });

  return data;
};
