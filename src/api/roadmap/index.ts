import { axiosInstance } from '@/api';
import type {
  GetRoadmapsMyResponse,
  PostRoadmapsIndividualResponse,
  GetRoadmapStepsResponse,
  PostRoadmapStepIndividualResponse,
  GetRoadmapStepReferenceRequest,
  GetRoadmapStepReferenceResponse,
  PostRoadmapsGroupsParticipateResponse,
  DelelteRoadmapGroupApplyRejectResponse,
  PostRoadmapGroupApplyAcceptResponse,
  GetRoadmapGroupApplyResponse,
  DeleteRoadmapGroupMemberResponse,
  PatchRoadmapGroupMemberRoleResponse,
  Role,
  GetRoadmapGroupMemberResponse,
  PostRoadmapsResponse,
  GetRoadmapsResponse,
} from '@/api/roadmap/type';
import type { RoadmapForm } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';

export const getRoadmapsMy = async () => {
  const { data } = await axiosInstance.request<GetRoadmapsMyResponse>({
    method: 'GET',
    url: `/roadmaps/my/`,
  });

  return data;
};

export const getRoadmaps = async (queryParamToString: string) => {
  const { data } = await axiosInstance.request<GetRoadmapsResponse>({
    method: 'GET',
    url: `/roadmaps${queryParamToString}`,
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

export const postRoadmaps = async (roadmapForm: RoadmapForm) => {
  const { data } = await axiosInstance.request<PostRoadmapsResponse>({
    method: 'POST',
    url: '/roadmaps',
    data: roadmapForm,
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

export const delelteRoadmapGroupApplyReject = async ({ roadmapId, userId }: { roadmapId: number; userId: number }) => {
  const { data } = await axiosInstance.request<DelelteRoadmapGroupApplyRejectResponse>({
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
