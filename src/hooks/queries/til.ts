import { useQuery } from '@tanstack/react-query';
import { getTils } from '@/api/til';
import type { TilsRequest } from '@/api/til/type';

const QUERY_KEY = {
  getTils: 'getTils',
};

export const useGetTils = ({ roadmapId, page, date, title }: TilsRequest) => {
  const { data, isLoading } = useQuery([QUERY_KEY.getTils], () => getTils({ roadmapId, page, date, title }));

  return {
    // return type에 undefined 제거 하기위해 null 병합 연산자 추가
    tils: data?.result.tils ?? [],
    isLoading,
  };
};
