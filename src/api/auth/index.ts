import { axiosInstance } from '@/api';
import type {
  EmailCodeCheckRequest,
  JoinRequest,
  LoginRequest,
  LoginResponse,
  PasswordChangeRequest,
  PasswordChangeResponse,
} from './type';
import type { NullResultResponse } from '../type';

export const postEmailCheck = async (body: { email: string }) => {
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/check',
    data: body,
  });

  return data;
};

export const postEmailCode = async (body: { email: string }) => {
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/code',
    data: body,
  });

  return data;
};

export const postEmailCodeCheck = async (body: EmailCodeCheckRequest) => {
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/code/check',
    data: body,
  });

  return data;
};

export const postJoin = async (body: JoinRequest) => {
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/join',
    data: body,
  });

  return data;
};

export const postLogin = async ({ email, password }: LoginRequest) => {
  const { data } = await axiosInstance.request<LoginResponse>({
    method: 'POST',
    url: '/login',
    data: { email, password },
  });

  return data;
};

export const postPasswordChange = async ({ email, password }: PasswordChangeRequest) => {
  const { data } = await axiosInstance.request<PasswordChangeResponse>({
    method: 'POST',
    url: '/password/change',
    data: { email, password },
  });

  return data;
};
