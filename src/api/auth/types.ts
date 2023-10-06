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
