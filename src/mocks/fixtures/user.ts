import type { UserHistoryResponse } from '@/api/user/types';

export const userHistoryResponse: UserHistoryResponse = {
  success: true,
  message: 'ok',
  result: {
    gardens: [
      {
        date: '2023-09-14',
        iswrite: true,
      },
      {
        date: '2023-09-15',
        iswrite: false,
      },
      {
        date: '2023-09-16',
        iswrite: true,
      },
      {
        date: '2023-09-17',
        iswrite: true,
      },
    ],
  },
};
