import type { UserHistoryResponse } from '@/api/user/types';

export const userHistoryResponse: UserHistoryResponse = {
  success: true,
  message: 'ok',
  result: {
    gardens: [
      {
        day: '2023-09-14',
        value: 1,
      },
      {
        day: '2023-09-15',
        value: 0,
      },
      {
        day: '2023-09-16',
        value: 1,
      },
      {
        day: '2023-09-17',
        value: 1,
      },
    ],
  },
};
