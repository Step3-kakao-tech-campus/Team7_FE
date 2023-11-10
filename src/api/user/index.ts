import { axiosInstance } from '@/api';
import type { NullResultResponse } from '@/api/type';
import type { CommonResponse } from '@/api/type';
import type { User } from '@/api/type';
import type {
  GetAlarmsResponse,
  GetUserHistoryResponse,
  PatchAlarmRequest,
  PatchUserPasswordRequest,
  PostUserProfileImageRequset,
} from '@/api/user/type';

// 유저 정보

export const getUsers = async () => {
  const { data } = await axiosInstance.request<User>({
    method: 'GET',
    url: `/users`,
  });

  return data;
};

// 알람 정보

export const getAlarms = async () => {
  const { data } = await axiosInstance.request<GetAlarmsResponse>({
    method: 'GET',
    url: `/alarms`,
  });

  return data;
};

// 알림 읽음 처리

export const patchAlarm = async (req: { body: PatchAlarmRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/alarms/read`,
    data: body,
  });

  return data;
};

// 유저 학습 히스토리

export const getUserHistory = async () => {
  const { data } = await axiosInstance.request<GetUserHistoryResponse>({
    method: 'GET',
    url: `/gardens`,
  });

  return data;
};

// 마이페이지 유저 비밀번호 변경

export const patchUserPassword = async (req: { body: PatchUserPasswordRequest }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/users`,
    data: body,
  });

  return data;
};

// 회원 탈퇴

export const deleteUser = async (req: { body: { password: string } }) => {
  const { body } = req;

  const { data } = await axiosInstance.request<CommonResponse>({
    method: 'DELETE',
    url: `/users`,
    data: body,
  });

  return data;
};

// 유저 프로필 이미지 업로드

export const postUserProfileImage = async (req: { param: { userId: number }; body: PostUserProfileImageRequset }) => {
  const {
    param: { userId },
    body,
  } = req;

  const { data } = await axiosInstance.request<CommonResponse>({
    method: 'POST',
    url: `/images/users/${userId}`,
    data: body,
    headers: {
      'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
    },
  });

  return data;
};
