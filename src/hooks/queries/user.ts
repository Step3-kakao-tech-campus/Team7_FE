import { useQuery } from '@tanstack/react-query';
import { getUserHistory } from '@/api/user';

const QUERY_KEY = {
  userHistory: 'userHistory',
};

export const useGetUserHistory = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.userHistory], () => getUserHistory());

  return {
    // return type에 undefined 제거 하기위해 null 병합 연산자 추가
    history: data?.result.gardens ?? [],
    isLoading,
  };
};
