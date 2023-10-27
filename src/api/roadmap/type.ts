import type { Step, Category, Roadmaps, CommonResponse } from '@/api/type';

// getRoadmaps
export interface GetRoadmapsResponseMy {
  success: boolean;
  message: string;
  result: UserRoadmapsResult;
}

export interface UserRoadmapsResult {
  categories: Category[];
  roadmaps: Roadmaps;
}

// getRoadmapSteps
export interface GetRoadmapStepsResponse {
  success: boolean;
  message: string;
  result: RoadmapStepsResult;
}

export interface RoadmapStepsResult {
  steps: Step[];
  progress: number;
  role: string;
}

// getRoadmapStepReference
export interface GetRoadmapStepReferenceRequest {
  roadmapId: number;
  stepId: number;
}

export interface GetRoadmapStepReferenceResponse extends CommonResponse {
  result: {
    id: number;
    description: string;
    youtube: Youtube[];
    web: Web[];
  };
}

export interface Youtube {
  id: number;
  link: string;
}

export interface Web {
  id: number;
  link: string;
}

// postRoadmapsIndividual
export interface PostRoadmapsIndividualResponse {
  success: boolean;
  message: string;
  result: { id: number };
}

// postRoadmapStepIndividual
export interface PostRoadmapStepIndividualResponse {
  success: boolean;
  message: string;
  result: {
    id: number;
  };
}

// postRoadmapsGroupsParticipate
export interface PostRoadmapsGroupsParticipateResponse {
  success: boolean;
  message: string;
  result: {
    id: number;
  };
}

// postRoadmaps
export interface PostRoadmapsResponse {
  success: boolean;
  message: string;
  result: {
    id: number;
  };
}

// getRoadmapGroupMember
export interface GetRoadmapGroupMemberResponse extends CommonResponse {
  result: {
    users: Member[];
    myRole: Role;
  };
}

export interface Member {
  id: number;
  name: string;
  image: string;
  role: Exclude<Role, null>;
}

export type Role = keyof typeof roleStatus | null;

export const roleStatus = {
  master: '마스터',
  manager: '매니저',
  member: '멤버',
} as const;

// patchRoadmapGroupMemberRole
export interface PatchRoadmapGroupMemberRoleResponse extends CommonResponse {}

// deleteRoadmapGroupMember

export interface DeleteRoadmapGroupMemberResponse extends CommonResponse {}

// getRoadmapGroupApply

export interface GetRoadmapGroupApplyResponse extends CommonResponse {
  result: {
    users: ApplyMember[];
    myRole: Role;
  };
}

export interface ApplyMember {
  id: number;
  name: string;
  image: string;
  date: string;
  content: string;
}

// postRoadmapGroupApplyAccept

export interface PostRoadmapGroupApplyAcceptResponse extends CommonResponse {}

// delelteRoadmapGroupApplyReject

export interface DelelteRoadmapGroupApplyRejectResponse extends CommonResponse {}
