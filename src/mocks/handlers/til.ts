import { rest } from 'msw';
import {
  tilsInfinityEndResponse,
  tilsResponse,
  tilsCategoryResponse,
  tilsDateResponse,
  tilsTitleResponse,
  getTilResponse,
  updateGetTilResponseFixture,
  getStepTilsResponse,
  getStepTilsIsSubmitFalseResponse,
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

  rest.get(`${BASE_URL}/roadmaps/:roadmapId/steps/:stepId/tils/:tilId`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getTilResponse));
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

  rest.post(`${BASE_URL}/roadmaps/:roadmapId/steps/:stepId/tils`, (req, res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: 'ok',
          result: {
            id: 1,
          },
        }),
      );
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

  rest.post(`${BASE_URL}/roadmaps/:roadmapId/steps/:stepId/tils/:tilId/comments`, (req, res, ctx) => {
    const {
      body: { content },
    } = req as any;
    try {
      updateGetTilResponseFixture(content);
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: 'ok',
          result: {
            id: 1,
          },
        }),
      );
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

  rest.get(`${BASE_URL}/roadmaps/groups/:roadId/steps/:stepId/tils`, (req, res, ctx) => {
    const isSubmit = req.url.searchParams.get('isSubmit');

    if (isSubmit === 'false') return res(ctx.status(200), ctx.json(getStepTilsIsSubmitFalseResponse));

    try {
      return res(ctx.status(200), ctx.json(getStepTilsResponse));
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
