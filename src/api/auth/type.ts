import { type CommonResponse } from '@/api/type';

// Auth 요청 인터페이스
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

// Auth 응답 인터페이스
export interface LoginResponse extends CommonResponse {
  result: { accessToken: string };
}
