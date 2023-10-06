import { axiosInstance } from '@/api';
import type { EmailCheckResponse, EmailCodeCheckResponse } from './types';

export const postEmailCheck = async ({ email }: { email: string }) => {
  const { data } = await axiosInstance.request<EmailCheckResponse>({
    method: 'POST',
    url: '/email/check',
    data: { email },
  });

  return data;
};

export const postEmailCodeCheck = async ({ email, code }: { email: string; code: string }) => {
  const { data } = await axiosInstance.request<EmailCodeCheckResponse>({
    method: 'POST',
    url: '/email/code/check',
    data: { email, code },
  });

  return data;
};
