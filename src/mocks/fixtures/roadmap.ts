import type { UserRoadmapsResponse } from '@/api/roadmap/type';

export const userRoadmapsResponse: UserRoadmapsResponse = {
  success: true,
  message: 'ok',
  result: {
    category: [
      {
        id: 1,
        name: '홍박사의 알고리즘',
      },
      {
        id: 2,
        name: '홍박사의 스프링',
      },
      {
        id: 3,
        name: '홍박사의 비밀일기 ><',
      },
    ],
    roadmap: {
      tily: [
        {
          id: 1,
          name: '알고리즘 격파!',
          stepNum: 88,
        },
        {
          id: 2,
          name: '자료구조',
          stepNum: 50,
        },
      ],
      group: [
        {
          id: 1,
          name: '준서좌의 나도 할 수 있다 알고리즘',
          stepNum: 20,
          image: 'qwer.jpg',
          creator: {
            id: 5,
            name: '김수현',
            image: 'asdf.jpg',
          },
        },
        {
          id: 2,
          name: '상명좌의 나도 할 수 있다 스프링',
          stepNum: 20,
          image: 'qwer.jpg',
          creator: {
            id: 6,
            name: '김동영',
            image: 'asdf.jpg',
          },
        },
        {
          id: 3,
          name: '수현좌의 JPA 비밀 노트',
          stepNum: 20,
          image: 'qwer.jpg',
          creator: {
            id: 6,
            name: '김동영',
            image: 'asdf.jpg',
          },
        },
      ],
    },
  },
};
