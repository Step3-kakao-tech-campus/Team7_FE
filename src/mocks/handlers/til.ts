import { rest } from 'msw';
import {
  tilsInfinityEndResponse,
  tilsResponse,
  tilsCategoryResponse,
  tilsDateResponse,
  tilsTitleResponse,
  updateFixture,
} from '@/mocks/fixtures/til';

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
      if (roadmapId) {
        try {
          return res(ctx.status(200), ctx.json(tilsCategoryResponse));
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
      if (date) {
        try {
          return res(ctx.status(200), ctx.json(tilsDateResponse));
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

      if (title) {
        try {
          return res(ctx.status(200), ctx.json(tilsTitleResponse));
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

  rest.post(`${BASE_URL}/roadmaps/individual/:id/steps`, (req, res, ctx) => {
    const {
      body: { title },
    } = req;

    console.log(title);

    try {
      updateFixture(title);
      return res(ctx.status(200), ctx.json(tilsCategoryResponse));
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
