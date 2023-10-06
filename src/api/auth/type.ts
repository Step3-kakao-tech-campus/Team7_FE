export interface EmailCheckRequest {
  email: string;
}

export interface EmailCodeCheckRequest {
  email: string;
  code: string;
}

export interface EmailCheckResponse {
  success: boolean;
  code: number;
  message: string;
  result: null;
}

export interface EmailCodeCheckResponse {
  success: boolean;
  code: number;
  message: string;
  result: { email: string } | null;
}
