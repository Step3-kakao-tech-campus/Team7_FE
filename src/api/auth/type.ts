import { type CommonResponse } from '@/api/type';

/*
 * Auth 요청
 */

// 인증 코드 검증

export interface PostEmailCodeCheckRequest {
  email: string;
  code: string;
}

// 회원 가입

export interface PostJoinRequest {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

// 유저 비밀번호 변경

export interface PostEmailPasswordRequest {
  email: string;
  password: string;
}

// 카카오 로그인

export interface GetKakaoLoginRequest {
  code: string;
}

/*
 * Auth 응답
 */

// 로그인 + 카카오 로그인

export interface LoginResponse extends CommonResponse {
  result: { accessToken: string };
}
