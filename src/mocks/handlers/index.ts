import { roadmapHandler } from '@/mocks/handlers/roadmap';
import { tilHandler } from '@/mocks/handlers/til';
import { userHandler } from '@/mocks/handlers/user';
import { registerHandler } from '@/mocks/handlers/register';

export const handlers = [...registerHandler,...userHandler, ...tilHandler, ...roadmapHandler];
