import { axiosInstance } from '@/api';
import type {
  EmailCodeCheckRequest,
  JoinRequest,
  EmailPasswordRequest,
  LoginResponse,
  KakaoLoginRequest,
} from '@/api/auth/type';
import type { NullResultResponse } from '@/api/type';

// 로그인

export const postLogin = async (req: { body: EmailPasswordRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<LoginResponse>({
    method: 'POST',
    url: '/login',
    data: body,
  });

  return data;
};

// 이메일 중복 확인

export const postEmailCheck = async (req: { body: { email: string } }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/check',
    data: body,
  });

  return data;
};

// 인증 코드 발송

export const postEmailCode = async (req: { body: { email: string } }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/code',
    data: body,
  });

  return data;
};

// 인증 코드 검증

export const postEmailCodeCheck = async (req: { body: EmailCodeCheckRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/code/check',
    data: body,
  });

  return data;
};

// 회원 가입

export const postJoin = async (req: { body: JoinRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/join',
    data: body,
  });

  return data;
};

// 유저 비밀번호 변경

export const postPasswordChange = async (req: { body: EmailPasswordRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/password/change',
    data: body,
  });

  return data;
};

// 카카오 로그인

export const getKakaoLogin = async (req: { body: KakaoLoginRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<LoginResponse>({
    method: 'GET',
    url: `/auth/kakao/callback?code=${body.code}`,
    data: body,
  });

  return data;
};
