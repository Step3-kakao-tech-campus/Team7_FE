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

// 공통 엔티티 인터페이스

// User
export interface User extends IdName {
  email: string;
  image: string;
}

// Alarm
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

// TIL
export interface Til {
  id: number;
  createDate: string;
  step: Pick<Step, 'id' | 'title'>;
  roadmap: IdName & { category: 'individual' | 'group' | 'tily' };
}

export interface MemberTil {
  tilId: number | null;
  userId: number;
  name: string;
  image: string;
  content: string | null;
  submitDate: string | null;
  commentNum: number | null;
}

// Step
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
  references: {
    youtube: Reference[];
    web: Reference[];
  };
}

// 참고자료
export interface Reference {
  id: number;
  link: string;
}

// 로드맵
export interface Roadmap extends IdName {
  description: string;
  stepNum: number;
  image?: string;
  isManager?: boolean;
  creator?: Creator;
}

// 로드맵 생성자
export interface Creator extends IdName {
  image: string;
}

// 장미밭
export interface UserHistory {
  day: string;
  value: number;
}

// 댓글
export interface Comment extends IdName {
  image: string;
  content: string;
  isOwner: boolean;
  date: string;
}

// 로드맵 구성원
export interface Member extends IdName {
  image: string;
  role: Exclude<Role, null>;
}

export type Role = keyof typeof roleStatus | null;

export const roleStatus = {
  master: '마스터',
  manager: '매니저',
  member: '멤버',
} as const;

// 로드맵 신청자
export interface ApplyMember extends IdName {
  image: string;
  date: string;
  content: string;
}
