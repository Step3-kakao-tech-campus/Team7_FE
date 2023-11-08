import { axiosInstance } from '@/api';
import type {
  GetTilsResponse,
  PostTilRequest,
  PostTilResponse,
  GetTilResponse,
  PostCommentRequest,
  PostCommentResponse,
  PatchCommentRequest,
  PatchCommentResponse,
  DeleteCommentRequest,
  DeleteCommentResponse,
  PatchTilRequest,
  PatchTilResponse,
  SubmitTilRequest,
  SubmitTilResponse,
  GetStepTilsRequest,
  GetStepTilsResponse,
} from '@/api/til/type';
import type { IdParams } from '@/api/type';

// 나의 틸 목록 전체 조회

export const getTils = async (req: { query: string }) => {
  const { query } = req;

  const { data } = await axiosInstance.request<GetTilsResponse>({
    method: 'GET',
    url: `/tils/my${query}`,
  });

  return data;
};

// 틸 조회하기

export const getTil = async (req: { param: IdParams }) => {
  const {
    param: { roadmapId, stepId, tilId },
  } = req;

  const { data } = await axiosInstance.request<GetTilResponse>({
    method: 'GET',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}`,
  });

  return data;
};

// 틸 생성하기

export const postTil = async (req: { param: IdParams; body: PostTilRequest }) => {
  const {
    param: { roadmapId, stepId },
    body,
  } = req;

  const { data } = await axiosInstance.request<PostTilResponse>({
    method: 'POST',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils`,
    data: body,
  });

  return data;
};

// 틸 저장하기

export const patchTil = async (req: { param: IdParams; body: PatchTilRequest }) => {
  const {
    param: { roadmapId, stepId, tilId },
    body,
  } = req;

  const { data } = await axiosInstance.request<PatchTilResponse>({
    method: 'PATCH',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}`,
    data: body,
  });

  return data;
};

export const submitTil = async (req: { param: IdParams; body: SubmitTilRequest }) => {
  const {
    param: { roadmapId, stepId, tilId },
    body: { title, content: submitContent },
  } = req;

  const { data } = await axiosInstance.request<SubmitTilResponse>({
    method: 'POST',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}`,
    data: { title, submitContent },
  });

  return data;
};

export const postComment = async (body: PostCommentRequest) => {
  const { roadmapId, stepId, tilId, content } = body;

  const { data } = await axiosInstance.request<PostCommentResponse>({
    method: 'POST',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}/comments`,
    data: { content },
  });

  return data;
};

export const patchComment = async (body: PatchCommentRequest) => {
  const { roadmapId, stepId, tilId, commentId, content } = body;

  const { data } = await axiosInstance.request<PatchCommentResponse>({
    method: 'PATCH',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}/comments/${commentId}`,
    data: { content },
  });

  return data;
};

export const deleteComment = async (body: DeleteCommentRequest) => {
  const { roadmapId, stepId, tilId, commentId } = body;

  const { data } = await axiosInstance.request<DeleteCommentResponse>({
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
