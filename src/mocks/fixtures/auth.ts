import type { EmailCheckResponse, EmailCodeCheckResponse, JoinResponse } from '@/api/auth/type';

export const emailCheckResponse: EmailCheckResponse = {
  success: true,
  code: 200,
  message: 'ok',
  result: null,
};

export const emailCodeCheckResponse: EmailCodeCheckResponse = {
  success: true,
  code: 200,
  message: '인증코드가 불일치합니다.',
  result: null,
};

export const joinResponse: JoinResponse = {
  success: true,
  code: 200,
  message: '인증코드가 불일치합니다.',
  result: null,
};

export const loginResponse: LoginResponse = {
  success: true,
  code: 200,
  message: '인증코드가 불일치합니다.',
  result: null,
};
