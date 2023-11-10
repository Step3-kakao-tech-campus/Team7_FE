import type { ParsedUrlQuery } from 'querystring';
import type { QueryKey } from '@tanstack/react-query';

export const USER_QUERY_KEY = {
  users: ['users'],
  usersHistory: () => [...USER_QUERY_KEY.users, 'history'],
  alarms: () => [...USER_QUERY_KEY.users, 'alarm'],
};

export const ROADMAP_QUERY_KEY = {
  roadmaps: ['roadmaps'],
  steps: ['steps'],
  references: ['reference'],
  getRoadmapsMy: () => [...ROADMAP_QUERY_KEY.roadmaps, 'my'],
  getRoadmaps: () => [...ROADMAP_QUERY_KEY.roadmaps, 'list'],
  getRoadmapsById: (roadmapId: number) => [...ROADMAP_QUERY_KEY.roadmaps, roadmapId],
  getRoadmapsQuery: (query: ParsedUrlQuery) => [...ROADMAP_QUERY_KEY.getRoadmaps(), query],
  getRoadmapSteps: (roadmapId: number) => [...ROADMAP_QUERY_KEY.roadmaps, ...ROADMAP_QUERY_KEY.steps, roadmapId],
  getRoadmapStepReference: (stepId: number) => [...ROADMAP_QUERY_KEY.steps, ...ROADMAP_QUERY_KEY.references, stepId],
  getRoadmapGroupMember: (roadmapId: number) => [...ROADMAP_QUERY_KEY.roadmaps, 'member', roadmapId],
  getRoadmapGroupApply: (roadmapId: number) => [...ROADMAP_QUERY_KEY.roadmaps, 'apply', roadmapId],
};

export const TIL_QUERY_KEY = {
  tils: ['tils'],
  getTils: (tilId: number) => [...TIL_QUERY_KEY.tils, tilId],
  getTilsQuery: (query: QueryKey) => [...TIL_QUERY_KEY.tils, query],
  getStepTils: (stepId: number) => [...TIL_QUERY_KEY.tils, 'steps', stepId],
};
