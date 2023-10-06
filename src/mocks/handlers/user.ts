import { rest } from 'msw';
import { userHistoryResponse } from '@/mocks/fixtures/user';

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
];
