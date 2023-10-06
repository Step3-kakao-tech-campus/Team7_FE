import { rest } from 'msw';

export const registerHandler = [
  rest.post('/email/check', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        code: 200,
        message: 'ok',
        result: null,
      }),
    );
  }),
  rest.post('/email/code/check', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        code: 200,
        message: '인증코드가 불일치합니다.',
        result: null,
      }),
    );
  }),
];
