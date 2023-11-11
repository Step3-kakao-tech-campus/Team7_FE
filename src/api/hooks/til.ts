import qs from 'qs';
import { useRouter } from 'next/router';
import type { QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getTils,
  getTilsQuery,
  postTils,
  postComments,
  patchComments,
  deleteComments,
  patchTils,
  submitTils,
  getStepTils,
} from '@/api/til';
import type {
  PatchCommentsRequest,
  PostCommentsRequest,
  PostTilsRequest,
  GetTilsQueryResponse,
  PatchTilsRequest,
  SubmitTilsRequest,
} from '@/api/til/type';
import type { IdParams } from '@/api/type';
import { useToast } from '@/components/common/Toast/useToast';
import { ROADMAP_QUERY_KEY, TIL_QUERY_KEY } from '@/constants/queryKey';
import { useApiError } from '@/hooks/useApiError';

interface InfinityTilRequest {
  queryKey?: QueryKey;
}

// 틸 생성하기

export const usePostTils = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(postTils);
  const { handleError } = useApiError();

  const postTilsAsync = async (req: { body: PostTilsRequest }) => {
    const { roadmapId } = req.body;

    const data = await mutateAsync(req, {
      onSuccess: () => {
        queryClient.invalidateQueries(ROADMAP_QUERY_KEY.getRoadmapSteps(roadmapId));
      },
      onError: handleError,
    });

    return data;
  };

  return { postTilsAsync };
};

// 틸 조회하기

export const useGetTils = (req: { tilId: number }) => {
  const { tilId } = req;

  const { isReady } = useRouter();

  const { data, isLoading } = useQuery(TIL_QUERY_KEY.getTils(tilId), () => getTils(req), {
    enabled: isReady,
  });

  return {
    tilDetail: data?.result ?? null,
    isLoading,
  };
};

// 틸 저장하기

export const usePatchTils = () => {
  const { mutateAsync } = useMutation(patchTils);
  const { handleError } = useApiError();

  const patchTilsAsync = async (req: { tilId: number; body: PatchTilsRequest }) => {
    const data = await mutateAsync(req, {
      onError: handleError,
    });

    return data;
  };
  return { patchTilsAsync };
};

// 틸 제출하기

export const useSubmitTils = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(submitTils);
  const { handleError } = useApiError();
  const toast = useToast();

  const submitTilsAsync = async (req: { param: IdParams; body: SubmitTilsRequest }) => {
    const {
      param: { roadmapId, tilId },
    } = req;

    const data = await mutateAsync(req, {
      onSuccess: () => {
        toast.showBottom({ message: 'TIL이 제출 되었습니다.' });
        queryClient.invalidateQueries(ROADMAP_QUERY_KEY.getRoadmapSteps(roadmapId!));
        queryClient.invalidateQueries(TIL_QUERY_KEY.getTils(tilId!));
      },
      onError: handleError,
    });

    return data;
  };
  return { submitTilsAsync };
};

// 나의 틸 목록 전체 조회

export const useGetTilsQuery = ({ queryKey }: InfinityTilRequest) => {
  const { query } = useRouter();
  const _queryKey = (typeof queryKey === 'string' ? [queryKey] : queryKey) ?? []; // _queryKey를 배열로 만든다 또한 _queryKey가 undefined일 경우 []로 초기화

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    TIL_QUERY_KEY.getTilsQuery(_queryKey),
    async ({ pageParam: page = 0 }) => {
      const searchParams = { page, ...query };

      const data = getTilsQuery({ query: qs.stringify(searchParams, { addQueryPrefix: true }) });
      return data;
    },
    {
      getNextPageParam: (lastPage: GetTilsQueryResponse, pages) => {
        if (!lastPage.result?.hasNext) {
          return undefined;
        }

        return pages.length;
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

// 코멘트 작성하기

export const usePostComments = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(postComments);
  const { handleError } = useApiError();
  const toast = useToast();

  const postCommentsAsync = async (req: { body: PostCommentsRequest }) => {
    const {
      body: { tilId },
    } = req;

    const data = await mutateAsync(req, {
      onSuccess: () => {
        toast.showBottom({ message: '댓글이 작성되었습니다.' });
        queryClient.invalidateQueries(TIL_QUERY_KEY.getTils(tilId));
      },
      onError: handleError,
    });

    return data;
  };

  return { postCommentsAsync };
};

// 코멘트 수정하기

export const usePatchComments = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { mutateAsync } = useMutation(patchComments);
  const { handleError } = useApiError();

  const patchCommentsAsync = async (req: {
    param: { tilId: number; commentId: number };
    body: PatchCommentsRequest;
  }) => {
    const {
      param: { tilId },
    } = req;

    const data = await mutateAsync(req, {
      onSuccess: () => {
        toast.showBottom({ message: '댓글이 수정 되었습니다.' });
        queryClient.invalidateQueries(TIL_QUERY_KEY.getTils(tilId));
      },
      onError: handleError,
    });

    return data;
  };

  return { patchCommentsAsync };
};

// 코멘트 삭제하기
export const useDeleteComments = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteComments);
  const { handleError } = useApiError();
  const toast = useToast();

  const deleteCommentsAsync = async (req: { param: { tilId: number; commentId: number } }) => {
    const {
      param: { tilId },
    } = req;

    const data = await mutateAsync(req, {
      onSuccess: () => {
        toast.showBottom({ message: '댓글이 삭제 되었습니다.' });
        queryClient.invalidateQueries(TIL_QUERY_KEY.getTils(tilId));
      },
      onError: handleError,
    });

    return data;
  };

  return { deleteCommentsAsync };
};

// 특정 스텝의 틸 목록 조회

export const useGetStepTils = (req: { stepId: number }) => {
  const { stepId } = req;

  const { data, isLoading } = useQuery(TIL_QUERY_KEY.getStepTils(stepId), () =>
    getStepTils({
      stepId,
      query: qs.stringify({ isSubmit: true, isMember: false, name: '' }, { addQueryPrefix: true }),
    }),
  );

  return {
    memberTils: data?.result.members,
    isLoading,
  };
};

// 특정 스텝의 틸 목록 조회(관리자용)

export const useGetStepTilsManage = ({ queryKey }: { queryKey: QueryKey }) => {
  const { query } = useRouter();
  const _queryKey = (typeof queryKey === 'string' ? [queryKey] : queryKey) ?? []; // _queryKey를 배열로 만든다 또한 _queryKey가 undefined일 경우 []로 초기화

  const { stepId, isSubmit, isMember, name } = query;

  const enabled = !!stepId;

  const { data, isLoading } = useQuery(
    [TIL_QUERY_KEY.getStepTils, ..._queryKey],
    () =>
      getStepTils({
        stepId: Number(stepId),
        query: qs.stringify({ isSubmit, isMember, name }, { addQueryPrefix: true }),
      }),
    {
      enabled,
    },
  );

  return {
    memberTils: data?.result.members || [],
    isLoading,
  };
};
