import type { GetUserResponse, UserHistoryResponse } from '@/api/user/type';

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

export const getUserResponse: GetUserResponse = {
  success: true,
  message: 'ok',
  result: {
    id: 1,
    name: '김동영',
    email: 'ehddud1006@pusan.ac.kr',
    image: 'https://avatars.githubusercontent.com/u/62373865?v=4',
  },
};
