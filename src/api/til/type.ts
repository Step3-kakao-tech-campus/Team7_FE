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
  roadmapId: string;
  stepId: string;
  tilId: string;
}

export interface GetTilResponse extends CommonResponse {
  result: {
    content: string;
    isPersonal: boolean;
    isCompleted: boolean;
    step: Omit<Step, 'tilId' | 'isCompleted'>;
    comments: Comment[];
  };
}

// postComment
export interface PostCommentRequest {
  roadmapId: string;
  stepId: string;
  tilId: string;
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
  roadmapId: string;
  stepId: string;
  tilId: string;
  title: string;
  content: string;
}

export interface PatchTilResponse extends CommonResponse {
  result: null;
}

// deleteComment
export interface DeleteCommentRequest {
  roadmapId: string;
  stepId: string;
  tilId: string;
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
