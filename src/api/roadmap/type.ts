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