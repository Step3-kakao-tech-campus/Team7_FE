import { axiosInstance } from '@/api';
import type {
  EmailCheckRequest,
  EmailCheckResponse,
  EmailCodeCheckRequest,
  EmailCodeCheckResponse,
  JoinRequest,
  JoinResponse,
} from './type';

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
    url: '/join',
    data: { email, code },
  });

  return data;
};

export const postJoin = async ({ email, name, password, passwordConfirm }: JoinRequest) => {
  const { data } = await axiosInstance.request<JoinResponse>({
    method: 'POST',
    url: '/email/code/check',
    data: { email, name, password, passwordConfirm },
  });

  return data;
};
