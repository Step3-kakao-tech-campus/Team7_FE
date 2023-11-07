import { axiosInstance } from '@/api';
import type {
  GetTilsRequest,
  GetTilsResponse,
  PostTilRequest,
  PostTilResponse,
  GetTilRequest,
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

export const getTils = async (query: GetTilsRequest) => {
  const { data } = await axiosInstance.request<GetTilsResponse>({
    method: 'GET',
    url: `/tils/my${query}`,
  });

  return data;
};

export const getTil = async (body: GetTilRequest) => {
  const { roadmapId, stepId, tilId } = body;

  const { data } = await axiosInstance.request<GetTilResponse>({
    method: 'GET',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}`,
  });

  return data;
};

export const postTil = async (body: PostTilRequest) => {
  const { roadmapId, stepId, title } = body;

  const { data } = await axiosInstance.request<PostTilResponse>({
    method: 'POST',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils`,
    data: { title },
  });

  return data;
};

export const patchTil = async (body: PatchTilRequest) => {
  const { roadmapId, stepId, tilId, title, content } = body;

  const { data } = await axiosInstance.request<PatchTilResponse>({
    method: 'PATCH',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/tils/${tilId}`,
    data: { title, content },
  });

  return data;
};

export const submitTil = async (body: SubmitTilRequest) => {
  const { roadmapId, stepId, tilId, title, content: submitContent } = body;

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
