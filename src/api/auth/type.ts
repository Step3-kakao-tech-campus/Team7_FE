import { type CommonResponse } from '@/api/type';

/*
 * Auth 요청
 */

// 인증 코드 검증
export interface EmailCodeCheckRequest {
  email: string;
  code: string;
}

// 회원 가입
export interface JoinRequest {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

// 유저 비밀번호 변경
export interface EmailPasswordRequest {
  email: string;
  password: string;
}

// 카카오 로그인
export interface KakaoLoginRequest {
  code: string;
}

/*
 * Auth 응답
 */

// 로그인, 카카오 로그인
export interface LoginResponse extends CommonResponse {
  result: { accessToken: string };
}
