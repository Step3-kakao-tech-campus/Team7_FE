import type { EmailCheckResponse, EmailCodeCheckResponse, JoinResponse, LoginResponse } from '@/api/auth/type';

export const emailCheckResponse: EmailCheckResponse = {
  success: true,
  code: 200,
  message: 'ok',
  result: null,
};

export const emailCodeCheckResponse: EmailCodeCheckResponse = {
  success: true,
  code: 200,
  message: 'ok',
  result: null,
};

export const joinResponse: JoinResponse = {
  success: true,
  code: 200,
  message: 'ok',
  result: null,
};

export const loginResponse: LoginResponse = {
  success: true,
  code: 200,
  message: 'ok',
  result: {
    token:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzc2FyQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlkIjoyLCJleHAiOjE2ODcwNTIzNTd9.v-0C5EoV-QfGVC3Qdis1HLfKf4ZaYIBacWQ5ttkdtTOj6QqVJ4KoyQdvxBUz3NvjC-W0gs7EDFgwzMaaV1vuGg',
  },
};
