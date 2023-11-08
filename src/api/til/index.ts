import { axiosInstance } from '@/api';
import type {
  GetTilsQueryResponse,
  PostTilsRequest,
  GetTilsResponse,
  PostCommentsRequest,
  PatchCommentsRequest,
  DeleteCommentRequest,
  PatchTilsRequest,
  SubmitTilsRequest,
  GetStepTilsRequest,
  GetStepTilsResponse,
} from '@/api/til/type';
import type { IdResponse, NullResultResponse } from '@/api/type';
import type { IdParams } from '@/api/type';

// 틸 생성하기

export const postTils = async (req: { body: PostTilsRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<IdResponse>({
    method: 'POST',
    url: `/tils`,
    data: body,
  });

  return data;
};

// 틸 조회하기

export const getTils = async (req: { tilId: number }) => {
  const { tilId } = req;

  const { data } = await axiosInstance.request<GetTilsResponse>({
    method: 'GET',
    url: `/tils/${tilId}`,
  });

  return data;
};

// 틸 저장하기

export const patchTils = async (req: { tilId: number; body: PatchTilsRequest }) => {
  const { tilId, body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/tils/${tilId}`,
    data: body,
  });

  return data;
};

// 틸 제출하기

export const submitTils = async (req: { param: IdParams; body: SubmitTilsRequest }) => {
  const {
    param: { tilId },
    body: { content: submitContent },
  } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: `/tils/${tilId}`,
    data: { submitContent },
  });

  return data;
};

// 나의 틸 목록 전체 조회

export const getTilsQuery = async (req: { query: string }) => {
  const { query } = req;

  const { data } = await axiosInstance.request<GetTilsQueryResponse>({
    method: 'GET',
    url: `/tils/my${query}`,
  });

  return data;
};

// 코멘트 작성하기

export const postComments = async (req: { body: PostCommentsRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<IdResponse>({
    method: 'POST',
    url: `/comments`,
    data: body,
  });

  return data;
};

// 코멘트 수정하기

export const patchComments = async (req: {
  param: { tilId: number; commentId: number };
  body: PatchCommentsRequest;
}) => {
  const {
    param: { commentId },
    body,
  } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/comments/${commentId}`,
    data: body,
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
