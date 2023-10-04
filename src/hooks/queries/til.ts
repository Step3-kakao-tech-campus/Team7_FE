import { useInfiniteQuery } from '@tanstack/react-query';
import { getTils } from '@/api/til';
import type { TilsRequest, TilsResponse } from '@/api/til/type';

const QUERY_KEY = {
  getTils: 'getTils',
};

type InfinityTilRequest = Omit<TilsRequest, 'page'>;

export const useGetTils = ({ roadmapId = undefined, date = '', title = '' }: InfinityTilRequest) => {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    [QUERY_KEY.getTils],
    async ({ pageParam: page = 0 }) => {
      const data = getTils({ roadmapId, page, date, title });

      return data;
    },
    {
      getNextPageParam: (lastPage: TilsResponse, pages) => {
        if (!lastPage.hasNext) {
          return undefined;
        }

        return pages.length + 1;
      },
      keepPreviousData: true, // 이전 데이터 유지 layout shift 방지
    },
  );

  return {
    // return type에 undefined 제거 하기위해 null 병합 연산자 추가
    tils:
      data?.pages.flatMap((page) => {
        if (page.result === null) {
          // 마지막 페이지인 경우
          return [];
        }
        return page.result?.tils;
      }) ?? [],
    isLoading,
    fetchNextPage,
  };
};
