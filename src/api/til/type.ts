import type { CommonResponse, Step, Comment, Til } from '@/api/type';

export type GetTilsRequest = string;

// getTils
export interface GetTilsResponse {
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
    isSubmit: boolean;
    step: Omit<Step, 'tilId' | 'isSubmit'>;
    roadmapName: string;
    comments: Comment[];
  };
}

// postComment
export interface PostCommentRequest {
  roadmapId: number;
  stepId: number;
  tilId: number;
  content: string;
}

export interface PostCommentResponse extends CommonResponse {
  result: {
    id: number;
  };
}

// patchComment
export interface PatchCommentRequest extends PostCommentRequest {
  commentId: string;
}

export interface PatchCommentResponse extends CommonResponse {
  result: null;
}

// patchTil
export interface PatchTilRequest {
  roadmapId: number;
  stepId: number;
  tilId: number;
  title: string;
  content: string;
}

export interface PatchTilResponse extends CommonResponse {
  result: null;
}

// deleteComment
export interface DeleteCommentRequest {
  roadmapId: number;
  stepId: number;
  tilId: number;
  commentId: string;
}

export interface DeleteCommentResponse extends CommonResponse {
  result: null;
}

// submitTil
export interface SubmitTilRequest extends PatchTilRequest {}

export interface SubmitTilResponse extends CommonResponse {
  result: null;
}

//  getStepTils
export interface GetStepTilsRequest {
  roadmapId: number;
  stepId: number;
  input: string;
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
