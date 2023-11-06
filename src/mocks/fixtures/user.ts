import type { GetAlarmsResponse, GetUserResponse, GetUserHistoryResponse } from '@/api/user/type';

export const userHistoryResponse: GetUserHistoryResponse = {
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
  code: 200,
  result: {
    id: 1,
    name: '김동영',
    email: 'ehddud1006@pusan.ac.kr',
    image: 'https://avatars.githubusercontent.com/u/62373865?v=4',
  },
};

export const getAlarmsResponse: GetAlarmsResponse = {
  success: true,
  message: 'ok',
  code: 200,
  result: {
    alarms: [
      {
        id: 1,
        tilId: 1,
        isRead: false,
        roadmap: {
          id: 1,
          name: 'Next JS',
        },
        step: {
          id: 1,
          name: '6. SPA',
        },
        sender: {
          name: '김동영',
          image: 'https://avatars.githubusercontent.com/u/62373865?v=4',
        },
        createDate: new Date(),
      },
      {
        id: 2,
        tilId: 3,
        isRead: false,
        roadmap: {
          id: 1,
          name: 'Next JS',
        },
        step: {
          id: 1,
          name: '6. SPA',
        },
        sender: {
          name: '이한홍',
          image: 'https://avatars.githubusercontent.com/u/6237',
        },
        createDate: new Date(),
      },
    ],
  },
};

export const updateGetAlarmsResponseFixture = () => {
  getAlarmsResponse.result.alarms = getAlarmsResponse.result.alarms.map((alarm) => {
    return {
      ...alarm,
      isRead: true,
    };
  });
};
