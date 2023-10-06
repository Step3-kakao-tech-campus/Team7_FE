import { registerHandler } from '@/mocks/handlers/register';
import { userHandler } from '@/mocks/handlers/user';

export const handlers = [...registerHandler, ...userHandler];
