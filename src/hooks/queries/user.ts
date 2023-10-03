import { useQuery } from '@tanstack/react-query';
import { getUserHistory } from '@/api/user';

const QUERY_KEY = {
  userHistory: 'userHistory',
};

export const useGetUserHistory = () => {
  const { data } = useQuery([QUERY_KEY.userHistory], getUserHistory);

  const history = data?.result.gardens.map((garden) => {
    return { day: garden.date, value: garden.iswrite ? 1 : 0 };
  });

  return {
    // return type에 undefined 제거 하기위해 null 병합 연산자 추가
    history: history ?? [],
  };
};
