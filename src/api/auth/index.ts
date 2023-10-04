import { axiosInstance } from '@/api';
import type { EmailCheckResponse } from './types';

export const postEmailCheck = async ({ email }: { email: string }) => {
  const { data } = await axiosInstance.request<EmailCheckResponse>({
    method: 'POST',
    url: '/email/check',
    data: { email: email },
  });

  return data;
};
