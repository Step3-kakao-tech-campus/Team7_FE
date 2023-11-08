import type { CommonResponse, NullResultResponse, UserHistory, User, Alarm } from '@/api/type';

/*
 * User 요청
 */

// 알림 읽음 처리

export interface PatchAlarmRequest {
  alarms: Pick<Alarm, 'id'>[];
}

// 마이페이지 유저 비밀번호 변경

export interface PatchUserPasswordRequest {
  curPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

// 유저 프로필 이미지 업로드

export interface PostUserProfileImageRequset extends FormData {}

/*
 * User 응답
 */

// 유저 정보

export interface GetUsersResponse extends User {}

// 알람 정보

export interface GetAlarmsResponse extends CommonResponse {
  result: {
    alarms: Alarm[];
  };
}

// 유저 학습 히스토리

export interface GetUserHistoryResponse extends CommonResponse {
  result: {
    gardens: UserHistory[];
  };
}

// 마이페이지 유저 비밀번호 변경

export interface PatchUserPasswordResponse extends NullResultResponse {}

// 회원 탈퇴

export interface DeleteUserResponse extends CommonResponse {}

// 유저 프로필 이미지 업로드

export interface PostUserProfileImageResponse extends CommonResponse {}
