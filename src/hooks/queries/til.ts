import qs from 'qs';
import { useRouter } from 'next/router';
import type { QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTils } from '@/api/til';
import { postTilsIndividual as postTilsIndividualAPI } from '@/api/til';
import type { TilsResponse } from '@/api/til/type';

const QUERY_KEY = {
  getTils: 'getTils',
};

interface InfinityTilRequest {
  queryKey?: QueryKey;
}

export const useGetTilsParam = ({ queryKey }: InfinityTilRequest) => {
  const { query } = useRouter();
  const _queryKey = (typeof queryKey === 'string' ? [queryKey] : queryKey) ?? []; // _queryKey를 배열로 만든다 또한 _queryKey가 undefined일 경우 []로 초기화

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [QUERY_KEY.getTils, ..._queryKey],
    async ({ pageParam: page = 0 }) => {
      const searchParams = { page, ...query };

      const data = getTils(qs.stringify(searchParams, { addQueryPrefix: true }));

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
    hasNextPage,
  };
};

export const useGetTils = (queryKey: { roadmapId: string }) => {
  const enabled = queryKey.roadmapId !== '0';

  const { data, isLoading } = useInfiniteQuery(
    [QUERY_KEY.getTils, queryKey],
    async ({ pageParam: page = 0 }) => {
      const searchParams = { page, ...queryKey };

      const data = getTils(qs.stringify(searchParams, { addQueryPrefix: true }));

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
      enabled,
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
  };
};
