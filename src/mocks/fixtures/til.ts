import type { TilsResponse } from '@/api/til/type';

const tils = Array.from({ length: 9 }).map((_, index) => ({
  id: 1 + index,
  createDate: '2023-08-23',
  step: {
    id: 1 + index,
    title: '타입스크립트를 써야하는 이유1 타입스크립트를 써야하는 이유1',
  },
  roadmap: {
    id: 2,
    name: '알고리즘',
  },
}));

export const tilsResponse: TilsResponse = {
  success: true,
  message: 'ok',
  result: {
    tils,
  },
  hasNext: true,
};

export const tilsInfinityEndResponse: TilsResponse = {
  success: true,
  message: 'ok',
  result: null,
  hasNext: false,
};

export const tilsTitleResponse: TilsResponse = {
  success: true,
  message: 'ok',
  result: {
    tils: [
      {
        id: 1,
        createDate: '2023-09-17',
        step: {
          id: 1,
          title: '7조의 비밀일기장... 궁금하죠?',
        },
        roadmap: {
          id: 2,
          name: '비밀 일기장',
        },
      },
    ],
  },
  hasNext: false,
};

export const tilsDateResponse: TilsResponse = {
  success: true,
  message: 'ok',
  result: {
    tils: [
      {
        id: 1,
        createDate: '2023-09-17',
        step: {
          id: 1,
          title: '나는 문어~ 꿈을 꾸는 문어~ 나는 감자~',
        },
        roadmap: {
          id: 2,
          name: '감자학개론',
        },
      },
      {
        id: 2,
        createDate: '2023-09-17',
        step: {
          id: 2,
          title: '나는 문어~ 꿈을 꾸는 문어~ 나는 감자~',
        },
        roadmap: {
          id: 2,
          name: '감자학개론',
        },
      },
      {
        id: 3,
        createDate: '2023-09-17',
        step: {
          id: 3,
          title: '나는 문어~ 꿈을 꾸는 문어~ 나는 감자~',
        },
        roadmap: {
          id: 2,
          name: '감자학개론',
        },
      },
    ],
  },
  hasNext: false,
};
