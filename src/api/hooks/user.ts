import { useMutation, useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { getAlarms, getUsers, getUserHistory, postUserProfileImage as postUserProfileImageAPI } from '@/api/user';
import { patchAlarm, patchUserPassword as patchUserPasswordAPI, deleteUser as deleteUserAPI } from '@/api/user';
import type { PatchAlarmRequest, PatchUserPasswordRequest, PostUserProfileImageRequset } from '@/api/user/type';
import { useToast } from '@/components/common/Toast/useToast';
import { useApiError } from '@/hooks/useApiError';

export const USER_QUERY_KEY = {
  user: 'user',
  userHistory: 'userHistory',
  alarm: 'alarm',
};

// User

export const useGetUsers = () => {
  const { data, isLoading } = useQuery([USER_QUERY_KEY.user], () => getUsers());

  return {
    user: data,
    isLoading,
  };
};

// Alarm

export const useGetAlarms = () => {
  const { data } = useQuery([USER_QUERY_KEY.alarm], () => getAlarms());

  const isNewAlarm = data?.result.alarms.some((alarm) => alarm.isRead === false);

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
  const { mutateAsync } = useMutation(patchAlarm);

  const patchAlarmAsync = async (body: PatchAlarmRequest) => {
    const data = await mutateAsync(body);

    return data;
  };

  return { patchAlarmAsync };
};

export const useGetUserHistory = () => {
  const { data, isLoading } = useQuery([USER_QUERY_KEY.userHistory], () => getUserHistory());

  const history = data?.result.gardens.filter((garden) => garden.value !== 0);

  return {
    // return type에 undefined 제거 하기위해 null 병합 연산자 추가
    history: history ?? [],
    isLoading,
  };
};

export const usePatchUserPassword = () => {
  const { mutateAsync, isLoading } = useMutation(patchUserPasswordAPI);
  const toast = useToast();
  const { handleError } = useApiError();

  const patchUserPassword = async (body: PatchUserPasswordRequest) => {
    const data = await mutateAsync(body, {
      onSuccess: () => {
        toast.showBottom({
          message: '비밀번호가 변경되었습니다.',
        });
      },
      onError: handleError,
    });

    return {
      data,
    };
  };

  return { patchUserPassword, isLoading };
};

export const useDeleteUser = () => {
  const { mutateAsync } = useMutation(deleteUserAPI);
  const { handleError } = useApiError();

  const deleteUser = async (password: string) => {
    const data = await mutateAsync(password, {
      onError: handleError,
    });

    return {
      data,
    };
  };

  return { deleteUser };
};

export const usePostUserProfileImage = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(postUserProfileImageAPI);
  const { handleError } = useApiError();

  const postUserProfileImage = async (body: PostUserProfileImageRequset) => {
    const data = await mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([USER_QUERY_KEY.user]);
      },
      onError: handleError,
    });

    return {
      data,
    };
  };

  return { postUserProfileImage };
};
