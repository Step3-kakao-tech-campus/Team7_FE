import { useMutation, useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { getAlarms, getUsers, getUserHistory, postUserProfileImage } from '@/api/user';
import { patchAlarm, patchUserPassword, deleteUser } from '@/api/user';
import type { PatchAlarmRequest, PatchUserPasswordRequest, PostUserProfileImageRequset } from '@/api/user/type';
import { useToast } from '@/components/common/Toast/useToast';
import { USER_QUERY_KEY } from '@/constants/queryKey';
import { useApiError } from '@/hooks/useApiError';

// 유저 정보

export const useGetUsers = () => {
  const { data, isLoading } = useQuery(USER_QUERY_KEY.users, () => getUsers());

  return {
    user: data,
    isLoading,
  };
};

// 알람 정보

export const useGetAlarms = () => {
  const { data } = useQuery(USER_QUERY_KEY.alarms(), () => getAlarms());

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

// 알림 읽음 처리

export const usePatchAlarm = () => {
  const { mutateAsync } = useMutation(patchAlarm);

  const patchAlarmAsync = async (req: { body: PatchAlarmRequest }) => {
    const data = await mutateAsync(req);

    return data;
  };

  return { patchAlarmAsync };
};

// 유저 학습 히스토리

export const useGetUserHistory = () => {
  const { data, isLoading } = useQuery(USER_QUERY_KEY.usersHistory(), () => getUserHistory());

  const history = data?.result.gardens.filter((garden) => garden.value !== 0);

  return {
    // return type에 undefined 제거 하기위해 null 병합 연산자 추가
    history: history ?? [],
    isLoading,
  };
};

// 마이페이지 유저 비밀번호 변경

export const usePatchUserPassword = () => {
  const { mutateAsync, isLoading } = useMutation(patchUserPassword);
  const { handleError } = useApiError();
  const toast = useToast();

  const patchUserPasswordAsync = async (req: { body: PatchUserPasswordRequest }) => {
    const data = await mutateAsync(req, {
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

  return { patchUserPasswordAsync, isLoading };
};

// 회원 탈퇴

export const useDeleteUser = () => {
  const { mutateAsync } = useMutation(deleteUser);
  const { handleError } = useApiError();

  const deleteUserAsync = async (req: { body: { password: string } }) => {
    const data = await mutateAsync(req, {
      onError: handleError,
    });

    return {
      data,
    };
  };

  return { deleteUserAsync };
};

// 유저 프로필 이미지 업로드

export const usePostUserProfileImage = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(postUserProfileImage);
  const { handleError } = useApiError();

  const postUserProfileImageAsync = async (req: { param: { userId: number }; body: PostUserProfileImageRequset }) => {
    const data = await mutateAsync(req, {
      onSuccess: () => {
        queryClient.invalidateQueries(USER_QUERY_KEY.users);
      },
      onError: handleError,
    });

    return {
      data,
    };
  };

  return { postUserProfileImageAsync };
};
