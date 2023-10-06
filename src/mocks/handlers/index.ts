import { authHandler } from '@/mocks/handlers/auth';
import { roadmapHandler } from '@/mocks/handlers/roadmap';
import { tilHandler } from '@/mocks/handlers/til';
import { userHandler } from '@/mocks/handlers/user';

export const handlers = [...authHandler, ...userHandler, ...tilHandler, ...roadmapHandler];
