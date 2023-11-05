import { type CommonResponse } from '@/api/type';

// Auth 요청
export interface EmailCodeCheckRequest {
  email: string;
  code: string;
}

export interface JoinRequest {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface EmailPasswordRequest {
  email: string;
  password: string;
}

export interface KakaoLoginRequest {
  code: string;
}

// Auth 응답
export interface LoginResponse extends CommonResponse {
  token: string;
}
