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
};
