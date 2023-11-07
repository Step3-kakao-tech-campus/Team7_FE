import { axiosInstance } from '@/api';
import type {
  GetRoadmapsMyResponse,
  PostRoadmapsIndividualResponse,
  GetRoadmapStepsResponse,
  PostRoadmapStepIndividualResponse,
  GetRoadmapStepReferenceRequest,
  GetRoadmapStepReferenceResponse,
  PostRoadmapsGroupsParticipateResponse,
  DeleteRoadmapGroupApplyRejectResponse,
  PostRoadmapGroupApplyAcceptResponse,
  GetRoadmapGroupApplyResponse,
  DeleteRoadmapGroupMemberResponse,
  PatchRoadmapGroupMemberRoleResponse,
  Role,
  GetRoadmapGroupMemberResponse,
  GetRoadmapsResponse,
  GetRoadmapsByIdResponse,
  PostRoadmapsApplyResponse,
  PostRoadmapsRequest,
} from '@/api/roadmap/type';
import type { IdResponse } from '../type';

// 로드맵 - 공통

export const getRoadmapsMy = async () => {
  const { data } = await axiosInstance.request<GetRoadmapsMyResponse>({
    method: 'GET',
    url: `/roadmaps/my`,
  });

  return data;
};

export const getRoadmaps = async (req: { query: string }) => {
  const { query } = req;
  const { data } = await axiosInstance.request<GetRoadmapsResponse>({
    method: 'GET',
    url: `/roadmaps${query}`,
  });

  return data;
};

export const getRoadmapSteps = async (roadmapId: number) => {
  const { data } = await axiosInstance.request<GetRoadmapStepsResponse>({
    method: 'GET',
    url: `/roadmaps/${roadmapId}/steps`,
  });

  return data;
};

export const getRoadmapStepReference = async (body: GetRoadmapStepReferenceRequest) => {
  const { roadmapId, stepId } = body;

  const { data } = await axiosInstance.request<GetRoadmapStepReferenceResponse>({
    method: 'GET',
    url: `/roadmaps/${roadmapId}/steps/${stepId}/references`,
  });

  return data;
};

// 로드맵 - 개인

export const postRoadmapIndividual = async (name: string) => {
  const { data } = await axiosInstance.request<PostRoadmapsIndividualResponse>({
    method: 'POST',
    url: `/roadmaps/individual`,
    data: { name },
  });

  return data;
};

export const postRoadmapStepIndividual = async ({ roadmapId, title }: { roadmapId: number; title: string }) => {
  const { data } = await axiosInstance.request<PostRoadmapStepIndividualResponse>({
    method: 'POST',
    url: `/roadmaps/individual/${roadmapId}/steps`,
    data: { title },
  });

  return data;
};

// 로드맵 - 그룹

export const postRoadmaps = async (req: { body: PostRoadmapsRequest }) => {
  const { body } = req;
  const { data } = await axiosInstance.request<IdResponse>({
    method: 'POST',
    url: '/roadmaps',
    data: body,
  });

  return data;
};

export const postRoadmapsById = async ({ roadmapId, body }: { roadmapId: number; body: PostRoadmapsRequest }) => {
  const { data } = await axiosInstance.request<IdResponse>({
    method: 'POST',
    url: `/roadmaps/${roadmapId}`,
    data: body,
  });

  return data;
};

export const getRoadmapsById = async (req: { roadmapId: number }) => {
  const { roadmapId } = req;
  const { data } = await axiosInstance.request<GetRoadmapsByIdResponse>({
    method: 'GET',
    url: `roadmaps/${roadmapId}`,
  });

  return data;
};

export const postRoadmapsApply = async ({ roadmapId, content }: { roadmapId: number; content: string }) => {
  const { data } = await axiosInstance.request<PostRoadmapsApplyResponse>({
    method: 'POST',
    url: `roadmaps/${roadmapId}/apply`,
    data: { content },
  });

  return data;
};

export const getRoadmapGroupMember = async (roadmapId: number) => {
  const { data } = await axiosInstance.request<GetRoadmapGroupMemberResponse>({
    method: 'GET',
    url: `/roadmaps/groups/${roadmapId}/members`,
  });

  return data;
};

export const patchRoadmapGroupMemberRole = async ({
  roadmapId,
  userId,
  role,
}: {
  roadmapId: number;
  userId: number;
  role: Exclude<Role, null>;
}) => {
  const { data } = await axiosInstance.request<PatchRoadmapGroupMemberRoleResponse>({
    method: 'PATCH',
    url: `/roadmaps/groups/${roadmapId}/members/${userId}`,
    data: { role },
  });

  return data;
};

export const deleteRoadmapGroupMember = async ({ roadmapId, userId }: { roadmapId: number; userId: number }) => {
  const { data } = await axiosInstance.request<DeleteRoadmapGroupMemberResponse>({
    method: 'DELETE',
    url: `/roadmaps/groups/${roadmapId}/members/${userId}`,
  });

  return data;
};

export const getRoadmapGroupApply = async (roadmapId: number) => {
  const { data } = await axiosInstance.request<GetRoadmapGroupApplyResponse>({
    method: 'GET',
    url: `/roadmaps/groups/${roadmapId}/members/apply`,
  });

  return data;
};

export const postRoadmapGroupApplyAccept = async ({ roadmapId, userId }: { roadmapId: number; userId: number }) => {
  const { data } = await axiosInstance.request<PostRoadmapGroupApplyAcceptResponse>({
    method: 'POST',
    url: `/roadmaps/groups/${roadmapId}/members/${userId}/accept`,
  });

  return data;
};

export const deleteRoadmapGroupApplyReject = async ({ roadmapId, userId }: { roadmapId: number; userId: number }) => {
  const { data } = await axiosInstance.request<DeleteRoadmapGroupApplyRejectResponse>({
    method: 'DELETE',
    url: `/roadmaps/groups/${roadmapId}/members/${userId}/reject`,
  });

  return data;
};

export const postRoadmapsGroupsParticipate = async (code: string) => {
  const { data } = await axiosInstance.request<PostRoadmapsGroupsParticipateResponse>({
    method: 'POST',
    url: '/roadmaps/groups/participate',
    data: { code },
  });
  return data;
};
