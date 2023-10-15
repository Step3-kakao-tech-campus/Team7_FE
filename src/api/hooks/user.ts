import { useMutation, useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { getAlarms, getUser, getUserHistory } from '@/api/user';
import { patchAlarm as patchAlarmAPI } from '@/api/user';
import type { PatchAlarmRequest } from '@/api/user/type';

const QUERY_KEY = {
  userHistory: 'userHistory',
  user: 'user',
  alarm: 'alarm',
};

export const useGetUserHistory = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.userHistory], () => getUserHistory());

  return {
    // return type에 undefined 제거 하기위해 null 병합 연산자 추가
    history: data?.result.gardens ?? [],
    isLoading,
  };
};

export const useGetUser = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.user], () => getUser());

  return {
    user: data?.result,
    isLoading,
  };
};

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

  const mutation = useMutation(patchAlarmAPI);

  const patchAlarm = async (body: PatchAlarmRequest) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.alarm]);
      },
    });

    return data;
  };

  return { patchAlarm };
};
