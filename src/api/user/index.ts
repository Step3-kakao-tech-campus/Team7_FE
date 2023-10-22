import { axiosInstance } from '@/api';
import type {
  GetAlarmsResponse,
  GetUserHistoryResponse,
  GetUserResponse,
  PatchAlarmRequest,
  PatchUserPasswordRequest,
  PatchUserPasswordResponse,
} from '@/api/user/type';

export const getUserHistory = async () => {
  const { data } = await axiosInstance.request<GetUserHistoryResponse>({
    method: 'GET',
    url: `/gardens`,
  });

  return data;
};

export const getUser = async () => {
  const { data } = await axiosInstance.request<GetUserResponse>({
    method: 'GET',
    url: `/users`,
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

export const getAlarms = async () => {
  const { data } = await axiosInstance.request<GetAlarmsResponse>({
    method: 'GET',
    url: `/alarms`,
  });

  return data;
};

export const patchAlarm = async (body: PatchAlarmRequest) => {
  const { data } = await axiosInstance.request<GetAlarmsResponse>({
    method: 'PATCH',
    url: `/alarms/read`,
    data: body,
  });

  return data;
};
