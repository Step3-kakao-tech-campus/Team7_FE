// getRoadmaps
export interface UserRoadmapsResponse {
  success: boolean;
  message: string;
  result: UserRoadmapsResult;
}

export interface UserRoadmapsResult {
  category: Category[];
  roadmap: Roadmap;
}

interface Category {
  id: number;
  name: string;
}

interface Roadmap {
  tily: Tily[];
  group: Group[];
}

interface Tily {
  id: number;
  name: string;
  stepNum: number;
}

interface Group {
  id: number;
  name: string;
  stepNum: number;
  image: string;
  creator: Creator;
}

interface Creator {
  id: number;
  name: string;
  image: string;
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

export interface Step {
  id: number;
  title: string;
  isCompleted: boolean;
  tilId: number | null;
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
