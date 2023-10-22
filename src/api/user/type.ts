import type { CommonResponse, UserHistory, User, Alarm } from '@/api/type';

// getUserHistory
export interface GetUserHistoryResponse {
  success: boolean;
  message: string;
  result: {
    gardens: UserHistory[];
  };
}

// getUser
export interface GetUserResponse extends CommonResponse {
  result: User;
}

// patchUserPassword
export interface PatchUserPasswordRequest {
  curPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export interface PatchUserPasswordResponse extends CommonResponse {
  result: null;
}

// getAlarm
export interface GetAlarmsResponse extends CommonResponse {
  result: {
    alarms: Alarm[];
  };
}

// patchAlarm
export interface PatchAlarmRequest {
  alarms: Pick<Alarm, 'id'>[];
}
