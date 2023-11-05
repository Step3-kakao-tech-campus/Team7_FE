import { axiosInstance } from '@/api';
import type {
  EmailCodeCheckRequest,
  JoinRequest,
  EmailPasswordRequest,
  LoginResponse,
  KakaoLoginRequest,
} from '@/api/auth/type';
import type { NullResultResponse } from '@/api/type';

export const postLogin = async (body: EmailPasswordRequest) => {
  const { data } = await axiosInstance.request<LoginResponse>({
    method: 'POST',
    url: '/login',
    data: body,
  });

  return data;
};

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

export const postPasswordChange = async (body: EmailPasswordRequest) => {
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/password/change',
    data: body,
  });

  return data;
};

export const getKakaoLogin = async (body: KakaoLoginRequest) => {
  const { data } = await axiosInstance.request<LoginResponse>({
    method: 'GET',
    url: `/auth/kakao/callback?code=${body.code}`,
    data: body,
  });

  return data;
};
