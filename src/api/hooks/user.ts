import { useMutation, useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { getAlarms, getUsers, getUserHistory } from '@/api/user';
import { patchAlarm, patchUserPassword as patchUserPasswordAPI, deleteUser as deleteUserAPI } from '@/api/user';
import type { PatchAlarmRequest, PatchUserPasswordRequest } from '@/api/user/type';

const QUERY_KEY = {
  user: 'user',
  userHistory: 'userHistory',
  alarm: 'alarm',
};

// User

export const useGetUsers = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.user], () => getUsers());

  return {
    user: data?.result,
    isLoading,
  };
};

// Alarm

export const useGetAlarms = () => {
  const { data } = useQuery([QUERY_KEY.alarm], () => getAlarms());

  const isNewAlarm = data?.result.alarms.some((alarm) => alarm.isChecked === false);

  const patchAlarmRequset: PatchAlarmRequest = {
    alarms:
      data?.result.alarms.map((alarm) => ({
        id: alarm.id,
      })) ?? [],
  };

  return {
    alarms: data?.result.alarms ?? [],
    isNewAlarm,
    patchAlarmRequset,
  };
};

export const usePatchAlarm = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(patchAlarm);

  const patchAlarmAsync = async (body: PatchAlarmRequest) => {
    const data = await mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.alarm]);
      },
    });

    return data;
  };

  return { patchAlarmAsync };
};

export const useGetUserHistory = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.userHistory], () => getUserHistory());

  const history = data?.result.gardens.filter((garden) => garden.value !== 0);

  return {
    // return type에 undefined 제거 하기위해 null 병합 연산자 추가
    history: history ?? [],
    isLoading,
  };
};

export const usePatchUserPassword = () => {
  const { mutateAsync, isLoading } = useMutation(patchUserPasswordAPI);

  const patchUserPassword = async (body: PatchUserPasswordRequest) => {
    const data = await mutateAsync(body);

    return {
      data,
    };
  };

  return { patchUserPassword, isLoading };
};

export const useDeleteUser = () => {
  const { mutateAsync } = useMutation(deleteUserAPI);

  const deleteUser = async (password: string) => {
    const data = await mutateAsync(password);

    return {
      data,
    };
  };

  return { deleteUser };
};
