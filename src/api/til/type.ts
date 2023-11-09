import type { CommonResponse, Step, Comment, Til } from '@/api/type';

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

// postComment
export interface PostCommentsRequest {
  roadmapId: number;
  stepId: number;
  tilId: number;
  content: string;
}

// patchComment
export interface PatchCommentsRequest {
  content: string;
}

export interface GetStepTilsResponse extends CommonResponse {
  result: {
    members: MemberTil[];
  };
}

export interface MemberTil {
  tilId: number | null;
  userId: number;
  name: string;
  image: string;
  content: string | null;
  submitDate: string | null;
  commentNum: number | null;
}

// Til 응답

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
