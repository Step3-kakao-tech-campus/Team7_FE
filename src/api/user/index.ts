import { axiosInstance } from '@/api';
import type { NullResultResponse } from '@/api/type';
import type {
  GetAlarmsResponse,
  GetUserHistoryResponse,
  GetUsersResponse,
  PatchAlarmRequest,
  PatchUserPasswordRequest,
  PatchUserPasswordResponse,
  DeleteUserResponse,
  PostUserProfileImageResponse,
  PostUserProfileImageRequset,
} from '@/api/user/type';

// 유저 정보

export const getUsers = async () => {
  const { data } = await axiosInstance.request<GetUsersResponse>({
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

export const patchAlarm = async (body: PatchAlarmRequest) => {
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

export const patchUserPassword = async (body: PatchUserPasswordRequest) => {
  const { data } = await axiosInstance.request<PatchUserPasswordResponse>({
    method: 'PATCH',
    url: `/users`,
    data: { ...body },
  });

  return data;
};

// 회원 탈퇴

export const deleteUser = async (password: string) => {
  const { data } = await axiosInstance.request<DeleteUserResponse>({
    method: 'DELETE',
    url: `/users`,
    data: { password },
  });

  return data;
};

// 유저 프로필 이미지 업로드

export const postUserProfileImage = async (body: PostUserProfileImageRequset) => {
  const { userId, formData } = body;

  const { data } = await axiosInstance.request<PostUserProfileImageResponse>({
    method: 'POST',
    url: `user/${userId}/image`,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
    },
  });

  return data;
};
