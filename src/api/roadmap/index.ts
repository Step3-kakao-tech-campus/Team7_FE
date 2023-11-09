import { axiosInstance } from '@/api';
import type {
  GetRoadmapsMyResponse,
  GetRoadmapStepsResponse,
  GetRoadmapStepReferenceResponse,
  DeleteRoadmapGroupApplyRejectResponse,
  PostRoadmapGroupApplyAcceptResponse,
  GetRoadmapGroupApplyResponse,
  DeleteRoadmapGroupMemberResponse,
  PatchRoadmapGroupMemberRoleResponse,
  Role,
  GetRoadmapGroupMemberResponse,
  GetRoadmapsResponse,
  GetRoadmapsByIdResponse,
  PostRoadmapsRequest,
  PostStepsRequest,
  PostReferencesRequest,
} from '@/api/roadmap/type';
import type { IdResponse, NullResultResponse } from '../type';

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

export const getRoadmapStepReference = async (req: { param: { stepId: number } }) => {
  const {
    param: { stepId },
  } = req;

  const { data } = await axiosInstance.request<GetRoadmapStepReferenceResponse>({
    method: 'GET',
    url: `/steps/${stepId}/references`,
  });

  return data;
};

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

// 그룹 로드맵에 참여 신청하기

export const postGroupRoadmapsApply = async (req: { roadmapId: number; body: { content: string } }) => {
  const {
    roadmapId,
    body: { content },
  } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: `roadmaps/groups/${roadmapId}/apply`,
    data: { content },
  });

  return data;
};

// 틸리 로드맵에 참여 신청하기

export const postTilyRoadmapsApply = async (req: { roadmapId: number }) => {
  const { roadmapId } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: `roadmaps/tily/${roadmapId}/apply`,
  });

  return data;
};

// 참가 코드로 로드맵 신청하기

export const postRoadmapsGroupsParticipate = async (req: { body: { code: string } }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<IdResponse>({
    method: 'POST',
    url: '/roadmaps/groups/participate',
    data: body,
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

export const postSteps = async (req: { body: PostStepsRequest }) => {
  const { body } = req;
  const { data } = await axiosInstance.request<IdResponse>({
    method: 'POST',
    url: '/steps',
    data: body,
  });

  return data;
};

export const patchSteps = async (req: { stepId: number; body: Omit<PostStepsRequest, 'roadmapId'> }) => {
  const { stepId, body } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/steps/${stepId}`,
    data: body,
  });

  return data;
};

export const deleteSteps = async (req: { stepId: number }) => {
  const { stepId } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'DELETE',
    url: `/steps/${stepId}`,
  });

  return data;
};

export const deleteRoadmaps = async (req: { roadmapId: number }) => {
  const { roadmapId } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'DELETE',
    url: `/roadmaps/${roadmapId}`,
  });

  return data;
};

export const patchRoadmaps = async (req: { roadmapId: number; body: PostRoadmapsRequest }) => {
  const { roadmapId, body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/roadmaps/${roadmapId}`,
    data: body,
  });

  return data;
};

export const postReferences = async (req: { body: PostReferencesRequest }) => {
  const { body } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/references',
    data: body,
  });

  return data;
};

export const deleteReferences = async (req: { referenceId: number }) => {
  const { referenceId } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'DELETE',
    url: `/references/${referenceId}`,
  });

  return data;
};
