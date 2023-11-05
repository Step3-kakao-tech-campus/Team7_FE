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

// User

export const getUsers = async () => {
  const { data } = await axiosInstance.request<GetUsersResponse>({
    method: 'GET',
    url: `/users`,
  });

  return data;
};

// Alarm

export const getAlarms = async () => {
  const { data } = await axiosInstance.request<GetAlarmsResponse>({
    method: 'GET',
    url: `/alarms`,
  });

  return data;
};

export const patchAlarm = async (body: PatchAlarmRequest) => {
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'PATCH',
    url: `/alarms/read`,
    data: body,
  });

  return data;
};

export const getUserHistory = async () => {
  const { data } = await axiosInstance.request<GetUserHistoryResponse>({
    method: 'GET',
    url: `/gardens`,
  });

  return data;
};

export const patchUserPassword = async (body: PatchUserPasswordRequest) => {
  const { data } = await axiosInstance.request<PatchUserPasswordResponse>({
    method: 'PATCH',
    url: `/users`,
    data: { ...body },
  });

  return data;
};

export const deleteUser = async (password: string) => {
  const { data } = await axiosInstance.request<DeleteUserResponse>({
    method: 'DELETE',
    url: `/users`,
    data: { password },
  });

  return data;
};

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
