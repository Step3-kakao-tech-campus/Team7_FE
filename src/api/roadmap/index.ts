import { axiosInstance } from '@/api';
import type {
  GetRoadmapsMyResponse,
  GetRoadmapStepsResponse,
  GetRoadmapStepReferenceResponse,
  GetRoadmapGroupApplyResponse,
  Role,
  GetRoadmapGroupMemberResponse,
  GetRoadmapsResponse,
  GetRoadmapsByIdResponse,
  PostRoadmapsRequest,
  PostStepsRequest,
  PostReferencesRequest,
} from '@/api/roadmap/type';
import type { IdResponse, NullResultResponse, CommonResponse } from '../type';

// 로드맵 조회하기 (나의 로드맵)

export const getRoadmapsMy = async () => {
  const { data } = await axiosInstance.request<GetRoadmapsMyResponse>({
    method: 'GET',
    url: `/roadmaps/my`,
  });

  return data;
};

// 로드맵 조회하기 (모집 중인 로드맵)

export const getRoadmaps = async (req: { query: string }) => {
  const { query } = req;
  const { data } = await axiosInstance.request<GetRoadmapsResponse>({
    method: 'GET',
    url: `/roadmaps${query}`,
  });

  return data;
};

// 로드맵 상세 정보 조회

export const getRoadmapsById = async (req: { roadmapId: number }) => {
  const { roadmapId } = req;
  const { data } = await axiosInstance.request<GetRoadmapsByIdResponse>({
    method: 'GET',
    url: `roadmaps/${roadmapId}`,
  });

  return data;
};

// 로드맵 생성하기

export const postRoadmaps = async (req: { body: PostRoadmapsRequest }) => {
  const { body } = req;
  const { data } = await axiosInstance.request<IdResponse>({
    method: 'POST',
    url: '/roadmaps',
    data: body,
  });

  return data;
};

// 로드맵 정보 수정하기

export const patchRoadmaps = async (req: { roadmapId: number; body: PostRoadmapsRequest }) => {
  const { roadmapId, body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/roadmaps/${roadmapId}`,
    data: body,
  });

  return data;
};

// 로드맵 삭제하기

export const deleteRoadmaps = async (req: { roadmapId: number }) => {
  const { roadmapId } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'DELETE',
    url: `/roadmaps/${roadmapId}`,
  });

  return data;
};

// 그룹 로드맵 신청

export const postGroupApply = async (req: { roadmapId: number; body: { content: string } }) => {
  const { roadmapId, body } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: `roadmaps/groups/${roadmapId}/apply`,
    data: body,
  });

  return data;
};

// 틸리 로드맵 신청

export const postTilyApply = async (req: { roadmapId: number }) => {
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

// 로드맵 구성원 조회하기

export const getRoadmapGroupMember = async (req: { roadmapId: number }) => {
  const { roadmapId } = req;

  const { data } = await axiosInstance.request<GetRoadmapGroupMemberResponse>({
    method: 'GET',
    url: `/roadmaps/groups/${roadmapId}/members`,
  });

  return data;
};

// 로드맵의 구성원 역할 바꾸기

export const patchRoadmapGroupMemberRole = async (req: {
  param: { roadmapId: number; userId: number };
  body: { role: Exclude<Role, null> };
}) => {
  const {
    param: { roadmapId, userId },
    body,
  } = req;

  const { data } = await axiosInstance.request<CommonResponse>({
    method: 'PATCH',
    url: `/roadmaps/groups/${roadmapId}/members/${userId}`,
    data: body,
  });

  return data;
};

// 로드맵의 구성원 강퇴하기

export const deleteRoadmapGroupMember = async (req: { param: { roadmapId: number; userId: number } }) => {
  const {
    param: { roadmapId, userId },
  } = req;

  const { data } = await axiosInstance.request<CommonResponse>({
    method: 'DELETE',
    url: `/roadmaps/groups/${roadmapId}/members/${userId}`,
  });

  return data;
};

// 로드맵에 신청한 사람들 목록 조회하기

export const getRoadmapGroupApply = async (req: { roadmapId: number }) => {
  const { roadmapId } = req;

  const { data } = await axiosInstance.request<GetRoadmapGroupApplyResponse>({
    method: 'GET',
    url: `/roadmaps/groups/${roadmapId}/members/apply`,
  });

  return data;
};

// 로드맵 참여 신청 승인

export const postRoadmapGroupApplyAccept = async (req: { param: { roadmapId: number; userId: number } }) => {
  const {
    param: { roadmapId, userId },
  } = req;

  const { data } = await axiosInstance.request<CommonResponse>({
    method: 'POST',
    url: `/roadmaps/groups/${roadmapId}/members/${userId}/accept`,
  });

  return data;
};

// 로드맵 참여 신청 거절

export const deleteRoadmapGroupApplyReject = async (req: { param: { roadmapId: number; userId: number } }) => {
  const {
    param: { roadmapId, userId },
  } = req;

  const { data } = await axiosInstance.request<CommonResponse>({
    method: 'DELETE',
    url: `/roadmaps/groups/${roadmapId}/members/${userId}/reject`,
  });

  return data;
};

// STEP 생성하기

export const postSteps = async (req: { body: PostStepsRequest }) => {
  const { body } = req;
  const { data } = await axiosInstance.request<IdResponse>({
    method: 'POST',
    url: '/steps',
    data: body,
  });

  return data;
};

// STEP 조회하기

export const getRoadmapSteps = async (roadmapId: number) => {
  const { data } = await axiosInstance.request<GetRoadmapStepsResponse>({
    method: 'GET',
    url: `/roadmaps/${roadmapId}/steps`,
  });

  return data;
};

// STEP 수정하기

export const patchSteps = async (req: { stepId: number; body: Omit<PostStepsRequest, 'roadmapId'> }) => {
  const { stepId, body } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/steps/${stepId}`,
    data: body,
  });

  return data;
};

// STEP 삭제하기

export const deleteSteps = async (req: { stepId: number }) => {
  const { stepId } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'DELETE',
    url: `/steps/${stepId}`,
  });

  return data;
};

// STEP 의 레퍼런스 조회하기

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

// STEP의 레퍼런스 생성하기

export const postReferences = async (req: { body: PostReferencesRequest }) => {
  const { body } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/references',
    data: body,
  });

  return data;
};

// STEP의 레퍼런스 삭제하기

export const deleteReferences = async (req: { referenceId: number }) => {
  const { referenceId } = req;
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'DELETE',
    url: `/references/${referenceId}`,
  });

  return data;
};

export const postRoadmapsById = async ({ roadmapId, body }: { roadmapId: number; body: PostRoadmapsRequest }) => {
  const { data } = await axiosInstance.request<IdResponse>({
    method: 'PATCH',
    url: `/roadmaps/${roadmapId}`,
    data: body,
  });

  return data;
};
