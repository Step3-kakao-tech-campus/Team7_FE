import { type CommonResponse } from '@/api/type';

//  Auth 요청

export interface PostEmailPasswordRequest {
  email: string;
  password: string;
}

export interface PostEmailCodeCheckRequest {
  email: string;
  code: string;
}

export interface PostJoinRequest {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface GetKakaoLoginRequest {
  code: string;
}

// Auth 응답

export interface LoginResponse extends CommonResponse {
  result: { accessToken: string };
}
