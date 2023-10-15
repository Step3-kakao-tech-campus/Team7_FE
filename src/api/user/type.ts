import type { CommonResponse } from '@/api/type';

// getUserHistory
export interface GetUserHistoryResponse {
  success: boolean;
  message: string;
  result: {
    gardens: UserHistory[];
  };
}

export interface UserHistory {
  day: string;
  value: number;
}

// getUser
export interface GetUserResponse extends CommonResponse {
  result: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
}

// getAlarm
export interface GetAlarmsResponse extends CommonResponse {
  result: {
    alarms: Alarm[];
  };
}

export interface Alarm {
  id: number;
  tilId: number;
  isChecked: boolean;
  roadmap: Roadmap;
  step: Step;
  sender: Sender;
  createdAt: Date;
}

export interface Sender {
  name: string;
  image: string;
}

export interface Step {
  id: number;
  name: string;
}
export interface Roadmap {
  id: number;
  name: string;
}

// patchAlarm
export interface PatchAlarmRequest {
  alarms: Pick<Alarm, 'id'>[];
}
