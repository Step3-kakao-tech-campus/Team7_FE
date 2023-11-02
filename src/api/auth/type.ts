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

export interface LoginRequest {
  email: string;
  password: string;
}

export interface PasswordChangeRequest {
  email: string;
  password: string;
}

// Auth 응답 인터페이스
export interface LoginResponse {
  success: boolean;
  code: number;
  message: string;
  result: { accessToken: string } | null;
}

export interface PasswordChangeResponse {
  success: boolean;
  code: number;
  message: string;
  result: null;
}
