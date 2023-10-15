import type { Step, Category, Roadmaps, CommonResponse } from '@/api/type';

// getRoadmaps
export interface UserRoadmapsResponse {
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
  roadmapId: string;
  stepId: string;
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
