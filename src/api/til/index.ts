import { axiosInstance } from '@/api';
import type {
  GetTilsResponse,
  PostTilRequest,
  GetTilResponse,
  PostCommentRequest,
  PostCommentResponse,
  PatchCommentRequest,
  DeleteCommentRequest,
  PatchTilRequest,
  SubmitTilRequest,
  GetStepTilsRequest,
  GetStepTilsResponse,
} from '@/api/til/type';
import type { IdResponse, NullResultResponse } from '@/api/type';
import type { IdParams } from '@/api/type';

// 틸 생성하기

export const postTil = async (req: { body: PostTilRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<IdResponse>({
    method: 'POST',
    url: `/tils`,
    data: body,
  });

  return data;
};

// 틸 조회하기

export const getTil = async (req: { tilId: number }) => {
  const { tilId } = req;

  const { data } = await axiosInstance.request<GetTilResponse>({
    method: 'GET',
    url: `/tils/${tilId}`,
  });

  return data;
};

// 틸 저장하기

export const patchTil = async (req: { tilId: number; body: PatchTilRequest }) => {
  const { tilId, body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/tils/${tilId}`,
    data: body,
  });

  return data;
};

// 나의 틸 목록 전체 조회

export const getTils = async (req: { query: string }) => {
  const { query } = req;

  const { data } = await axiosInstance.request<GetTilsResponse>({
    method: 'GET',
    url: `/tils/my${query}`,
  });

  return data;
};

export const submitTil = async (req: { param: IdParams; body: SubmitTilRequest }) => {
  const {
    param: { roadmapId, stepId, tilId },
    body: { title, content: submitContent },
  } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}`,
    data: { title, submitContent },
  });

  return data;
};

export const postComment = async (req: { param: IdParams; body: PostCommentRequest }) => {
  const {
    param: { roadmapId, stepId, tilId },
    body: { content },
  } = req;

  const { data } = await axiosInstance.request<PostCommentResponse>({
    method: 'POST',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}/comments`,
    data: { content },
  });

  return data;
};

export const patchComment = async (body: PatchCommentRequest) => {
  const { roadmapId, stepId, tilId, commentId, content } = body;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}/comments/${commentId}`,
    data: { content },
  });

  return data;
};

export const deleteComment = async (body: DeleteCommentRequest) => {
  const { roadmapId, stepId, tilId, commentId } = body;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'DELETE',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}/comments/${commentId}`,
  });

  return data;
};

export const getStepTils = async (body: GetStepTilsRequest) => {
  const { roadmapId, stepId, input } = body;

  const { data } = await axiosInstance.request<GetStepTilsResponse>({
    method: 'GET',
    url: `/roadmaps/groups/${roadmapId}/steps/${stepId}/tils/${input}`,
  });

  return data;
};
