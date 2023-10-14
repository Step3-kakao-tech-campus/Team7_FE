import type { CommonResponse } from '@/api/type';

// getUserHistory
export interface GetUserHistoryResponse {
  success: boolean;
  message: string;
  result: {
    gardens: UserHistory[];
  };
}

export interface UserHistory {
  day: string;
  value: number;
}

export interface GetUserResponse extends CommonResponse {
  result: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
}
