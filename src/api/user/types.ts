export interface UserHistoryResponse {
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
