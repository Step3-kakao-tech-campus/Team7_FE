import type { CommonResponse, Step, Til } from '@/api/type';

export type TilsRequest = string;

// getTils
export interface TilsResponse {
  success: boolean;
  message: string;
  result: {
    tils: Til[];
  } | null;
  hasNext: boolean;
}

// postTil
export interface PostTilRequest {
  roadmapId: number;
  stepId: number;
  title: string;
}

export interface PostTilResponse {
  success: boolean;
  message: string;
  result: {
    id: number;
  };
}

// getTil
export interface GetTilRequest {
  roadmapId: number;
  stepId: number;
  tilId: number;
}

export interface GetTilResponse extends CommonResponse {
  result: {
    content: string;
    isPersonal: boolean;
    step: Omit<Step, 'tilId'>;
    comments: Comment[];
  };
}
