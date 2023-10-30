export interface CommonResponse {
  success: boolean;
  message: string;
  code?: number;
}

export interface Til {
  id: number;
  createDate: string;
  step: Pick<Step, 'id' | 'title'>;
  roadmap: Roadmap;
}

export interface Step {
  id: number;
  title: string;
  isCompleted: boolean;
  tilId: number | null;
  name?: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Roadmaps {
  tily: Tily[];
  group: Group[];
}

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
  creator: Creator;
}

export interface Creator {
  id: number;
  name: string;
  image: string;
}

export interface UserHistory {
  day: string;
  value: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
}

export interface Alarm {
  id: number;
  tilId: number;
  isChecked: boolean;
  roadmap: Roadmap;
  step: {
    id: number;
    name: string;
  };
  sender: Sender;
  createdAt: Date;
}

export interface Sender {
  name: string;
  image: string;
}

export interface Comment {
  id: number;
  name: string;
  image: string;
  content: string;
  isOwner: boolean;
  date: string;
}
