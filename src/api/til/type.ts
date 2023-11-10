import type { CommonResponse, Step, Comment, Til, MemberTil } from '@/api/type';

// Til 요청

export interface PostTilsRequest {
  roadmapId: number;
  stepId: number;
  title: string;
}

export interface PatchTilsRequest {
  content: string;
}

export interface SubmitTilsRequest extends PatchTilsRequest {}

export interface PostCommentsRequest {
  roadmapId: number;
  stepId: number;
  tilId: number;
  content: string;
}

export interface PatchCommentsRequest {
  content: string;
}

// Til 응답

export interface GetStepTilsResponse extends CommonResponse {
  result: {
    members: MemberTil[];
  };
}

export interface GetTilsResponse extends CommonResponse {
  result: {
    content: string;
    submitContent: string;
    isPersonal: boolean;
    isSubmit: boolean;
    step: Omit<Step, 'tilId' | 'isSubmit'>;
    roadmapName: string;
    comments: Comment[];
  };
}

export interface GetTilsQueryResponse extends CommonResponse {
  result: {
    tils: Til[];
    hasNext: boolean;
  } | null;
}
