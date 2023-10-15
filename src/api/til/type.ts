import type { CommonResponse, Step, Comment, Til } from '@/api/type';

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
  roadmapId: string;
  stepId: string;
  tilId: string;
}

export interface GetTilResponse extends CommonResponse {
  result: {
    content: string;
    isPersonal: boolean;
    step: Omit<Step, 'tilId'>;
    comments: Comment[];
  };
}
