import type { CommonResponse, UserHistory, Alarm } from '@/api/type';

// User 요청

export interface PatchAlarmRequest {
  alarms: Pick<Alarm, 'id'>[];
}

export interface PatchUserPasswordRequest {
  curPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export interface PostUserProfileImageRequset extends FormData {}

// User 응답

export interface GetAlarmsResponse extends CommonResponse {
  result: {
    alarms: Alarm[];
  };
}

export interface GetUserHistoryResponse extends CommonResponse {
  result: {
    gardens: UserHistory[];
  };
}
