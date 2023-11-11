import { axiosInstance } from '@/api';
import type {
  PostEmailCodeCheckRequest,
  PostJoinRequest,
  PostEmailPasswordRequest,
  LoginResponse,
  GetKakaoLoginRequest,
} from '@/api/auth/type';
import type { NullResultResponse } from '@/api/type';

// 로그인

export const postLogin = async (req: { body: PostEmailPasswordRequest }) => {
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

// 인증 코드 일치 여부 확인

export const postEmailCodeCheck = async (req: { body: PostEmailCodeCheckRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/code/check',
    data: body,
  });

  return data;
};

// 비밀번호 재설정하기

export const postPasswordChange = async (req: { body: PostEmailPasswordRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/password/change',
    data: body,
  });

  return data;
};

// 회원 가입

export const postJoin = async (req: { body: PostJoinRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/join',
    data: body,
  });

  return data;
};

// 카카오 로그인

export const getKakaoLogin = async (req: { body: GetKakaoLoginRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<LoginResponse>({
    method: 'GET',
    url: `/auth/kakao/callback?code=${body.code}`,
    data: body,
  });

  return data;
};
