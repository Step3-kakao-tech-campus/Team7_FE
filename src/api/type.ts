import type { References } from './roadmap/type';

// 공통 응답 인터페이스

export interface CommonResponse {
  success: boolean;
  code: number;
  message: string;
}

export interface NullResultResponse extends CommonResponse {
  result: null;
}

export interface IdResponse extends CommonResponse {
  result: {
    id: number;
  };
}

// 공통 요청 인터페이스

// id 인터페이스
export interface IdParams {
  roadmapId?: number;
  stepId?: number;
  tilId?: number;
}

export interface IdName {
  id: number;
  name: string;
  category?: 'individual' | 'group' | 'tily';
}

// User 인터페이스
export interface User extends IdName {
  email: string;
  image: string;
}

// Alarm 인터페이스
export interface Alarm {
  tilId: number;
  id: number;
  isChecked: boolean;
  roadmap: IdName;
  isRead: boolean;
  step: Pick<Step, 'id' | 'title'>;
  sender: Pick<User, 'name' | 'image'>;
  createDate: Date;
}

export interface Til {
  id: number;
  createDate: string;
  step: Pick<Step, 'id' | 'title'>;
  roadmap: IdName & { category: 'individual' | 'group' | 'tily' };
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
  dueDate: Date | null;
  references: References;
}

// 로드맵 인터페이스
export interface Roadmap extends IdName {
  description: string;
  stepNum: number;
  image?: string;
  isManager?: boolean;
  creator?: Creator;
}

export interface Creator extends IdName {
  image: string;
}

export interface UserHistory {
  day: string;
  value: number;
}

export interface Comment extends IdName {
  image: string;
  content: string;
  isOwner: boolean;
  date: string;
}
