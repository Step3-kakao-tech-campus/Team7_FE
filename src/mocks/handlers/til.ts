import { rest } from 'msw';
import { tilsInfinityEndResponse, tilsResponse } from '@/mocks/fixtures/til';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const tilHandler = [
  rest.get(`${BASE_URL}/tils/my`, (req, res, ctx) => {
    const roadmapId = req.url.searchParams.get('roadmapId');
    const page = req.url.searchParams.get('page');
    const date = req.url.searchParams.get('date');
    const title = req.url.searchParams.get('title');

    if (page === '10') {
      try {
        return res(ctx.status(200), ctx.json(tilsInfinityEndResponse));
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
    }

    if (page || page === '0') {
      try {
        return res(ctx.status(200), ctx.json(tilsResponse));
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
    }
  }),
];
