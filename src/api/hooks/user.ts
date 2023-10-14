import { useQuery } from '@tanstack/react-query';
import { getAlarms, getUser, getUserHistory } from '@/api/user';

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
  const { data } = useQuery([QUERY_KEY.user], () => getUser());

  return {
    user: data?.result,
  };
};

export const useGetAlarms = () => {
  const { data } = useQuery([QUERY_KEY.alarm], () => getAlarms());

  return {
    alarms: data?.result.alarms ?? [],
  };
};
