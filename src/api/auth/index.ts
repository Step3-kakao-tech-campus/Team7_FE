import { axiosInstance } from '@/api';
import type { EmailCheckRequest, EmailCheckResponse, EmailCodeCheckRequest, EmailCodeCheckResponse } from './type';

export const postEmailCheck = async ({ email }: EmailCheckRequest) => {
  const { data } = await axiosInstance.request<EmailCheckResponse>({
    method: 'POST',
    url: '/email/check',
    data: { email },
  });

  return data;
};

export const postEmailCodeCheck = async ({ email, code }: EmailCodeCheckRequest) => {
  const { data } = await axiosInstance.request<EmailCodeCheckResponse>({
    method: 'POST',
    url: '/email/code/check',
    data: { email, code },
  });

  return data;
};
