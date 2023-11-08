import type { CommonResponse, Step, Comment, Til } from '@/api/type';

// Til 요청

export interface PostTilRequest {
  roadmapId: number;
  stepId: number;
  title: string;
}

export interface PatchTilRequest {
  title?: string;
  content: string;
}

// postComment
export interface PostCommentRequest {
  content: string;
}

export interface PostCommentResponse extends CommonResponse {
  result: {
    id: number;
  };
}

// patchComment
export interface PatchCommentRequest {
  roadmapId: number;
  stepId: number;
  tilId: number;
  commentId: string;
  content: string;
}

// deleteComment
export interface DeleteCommentRequest {
  roadmapId: number;
  stepId: number;
  tilId: number;
  commentId: string;
}

// submitTil
export interface SubmitTilRequest extends PatchTilRequest {}

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

/*
 * Til 응답
 */

// 나의 틸 목록 전체 조회

export interface GetTilsResponse extends CommonResponse {
  result: {
    tils: Til[];
  } | null;
  hasNext: boolean;
}

// 틸 조회하기

export interface GetTilResponse extends CommonResponse {
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
