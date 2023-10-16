import { axiosInstance } from '@/api';
import type {
  EmailCheckRequest,
  EmailCheckResponse,
  EmailCodeCheckRequest,
  EmailCodeCheckResponse,
  EmailCodeRequest,
  EmailCodeResponse,
  JoinRequest,
  JoinResponse,
  LoginRequest,
  LoginResponse,
  PasswordChangeRequest,
  PasswordChangeResponse,
} from './type';

export const postEmailCheck = async ({ email }: EmailCheckRequest) => {
  const { data } = await axiosInstance.request<EmailCheckResponse>({
    method: 'POST',
    url: '/email/check',
    data: { email },
  });

  return data;
};

export const postEmailCode = async ({ email }: EmailCodeRequest) => {
  const { data } = await axiosInstance.request<EmailCodeResponse>({
    method: 'POST',
    url: '/email/code',
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

export const patchPasswordChange = async ({ email, password }: PasswordChangeRequest) => {
  const { data } = await axiosInstance.request<PasswordChangeResponse>({
    method: 'PATCH',
    url: '/password/change',
    data: { email, password },
  });

  return data;
};
