import { rest } from 'msw';
import {
  getAlarmsResponse,
  getUserResponse,
  userHistoryResponse,
  updateGetAlarmsResponseFixture,
} from '@/mocks/fixtures/user';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const userHandler = [
  rest.get(`${BASE_URL}/gardens`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(userHistoryResponse));
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

  rest.get(`${BASE_URL}/users`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getUserResponse));
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

  rest.get(`${BASE_URL}/alarms`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getAlarmsResponse));
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

  rest.patch(`${BASE_URL}/alarms/read`, (req, res, ctx) => {
    try {
      updateGetAlarmsResponseFixture();
      return res(
        ctx.status(200),
        ctx.json({
          success: false,
          message: 'ok',
          result: null,
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
];
