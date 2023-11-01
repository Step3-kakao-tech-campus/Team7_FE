import { axiosInstance } from '@/api';
import type {
  EmailCheckResponse,
  EmailCodeCheckRequest,
  EmailCodeCheckResponse,
  EmailCodeResponse,
  JoinRequest,
  JoinResponse,
  LoginRequest,
  LoginResponse,
  PasswordChangeRequest,
  PasswordChangeResponse,
} from './type';

export const postEmailCheck = async (body: { email: string }) => {
  const { data } = await axiosInstance.request<EmailCheckResponse>({
    method: 'POST',
    url: '/email/check',
    data: body,
  });

  return data;
};

export const postEmailCode = async (body: { email: string }) => {
  const { data } = await axiosInstance.request<EmailCodeResponse>({
    method: 'POST',
    url: '/email/code',
    data: body,
  });

  return data;
};

export const postEmailCodeCheck = async (body: EmailCodeCheckRequest) => {
  const { data } = await axiosInstance.request<EmailCodeCheckResponse>({
    method: 'POST',
    url: '/email/code/check',
    data: body,
  });

  return data;
};

export const postJoin = async ({ email, name, password, passwordConfirm }: JoinRequest) => {
  const { data } = await axiosInstance.request<JoinResponse>({
    method: 'POST',
    url: '/join',
    data: { email, name, password, passwordConfirm },
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
