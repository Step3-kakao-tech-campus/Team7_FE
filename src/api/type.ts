import { References } from './roadmap/type';

// 공통 응답 인터페이스
export interface CommonResponse {
  success: boolean;
  code: number;
  message: string;
}

export interface NullResultResponse extends CommonResponse {
  result: null;
}

// User 인터페이스
export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
}

// Alarm 인터페이스
export interface Alarm {
  id: number;
  tilId: number;
  isChecked: boolean;
  roadmap: Roadmap;
  step: Pick<Step, 'id' | 'title'>;
  sender: Pick<User, 'name' | 'image'>;
  createdAt: Date;
}

export interface Til {
  id: number;
  createDate: string;
  step: Pick<Step, 'id' | 'title'>;
  roadmap: Roadmap;
}

// Step 인터페이스
export interface Step {
  id: number;
  title: string;
  isSubmit: boolean;
  tilId: number | null;
  name?: string;
}

export interface StepWithReferences {
  id: number;
  title: string;
  description: string;
  references: References;
}

export interface Category {
  id: number;
  name: string;
}

export interface Roadmaps {
  tilys: Tily[];
  groups: Group[];
}

// 로드맵 인터페이스
export interface Roadmap {
  id: number;
  name: string;
}

export interface Tily {
  id: number;
  name: string;
  stepNum: number;
}

export interface Group {
  id: number;
  name: string;
  stepNum: number;
  image: string;
  isManager: boolean;
  creator: Creator;
}

export interface Creator {
  id?: number;
  name: string;
  image: string;
}

export interface UserHistory {
  day: string;
  value: number;
}

export interface Comment {
  id: number;
  name: string;
  image: string;
  content: string;
  isOwner: boolean;
  date: string;
}
