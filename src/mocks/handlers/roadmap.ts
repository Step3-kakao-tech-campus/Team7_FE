import { rest } from 'msw';
import { userRoadmapsResponse } from '@/mocks/fixtures/roadmap';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const roadmapHandler = [
  rest.get(`${BASE_URL}/roadmaps/my`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(userRoadmapsResponse));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: '서버에서 에러가 났어요',
          result: null,
        }),
      );
    }
  }),
];
