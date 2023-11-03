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
