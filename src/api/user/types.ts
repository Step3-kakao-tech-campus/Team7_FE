export interface UserHistoryResponse {
  success: boolean;
  message: string;
  result: {
    gardens: UserHistory[];
  };
}

export interface UserHistory {
  date: string;
  iswrite: boolean;
}
