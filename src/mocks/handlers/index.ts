import { roadmapHandler } from '@/mocks/handlers/roadmap';
import { tilHandler } from '@/mocks/handlers/til';
import { userHandler } from '@/mocks/handlers/user';

export const handlers = [...userHandler, ...tilHandler, ...roadmapHandler];
