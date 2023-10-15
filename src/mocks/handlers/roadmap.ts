import { rest } from 'msw';
import {
  userRoadmapsResponse,
  updateFixture,
  getRoadmapStepsResponse,
  updateGetRoadmapStepsResponseFixture,
  getRoadmapStepReferenceResponse,
} from '@/mocks/fixtures/roadmap';

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

  rest.get(`${BASE_URL}/roadmaps/:id/steps`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getRoadmapStepsResponse));
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

  rest.get(`${BASE_URL}/roadmaps/:roadmapId/steps/:stepId/references`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getRoadmapStepReferenceResponse));
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

  rest.post(`${BASE_URL}/roadmaps/individual`, (req, res, ctx) => {
    const {
      body: { name },
    } = req;

    try {
      updateFixture(name);
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

  rest.post(`${BASE_URL}/roadmaps/individual/:id/steps`, (req, res, ctx) => {
    const {
      body: { title },
    } = req;

    try {
      updateGetRoadmapStepsResponseFixture(title);
      return res(ctx.status(200), ctx.json(getRoadmapStepsResponse));
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
